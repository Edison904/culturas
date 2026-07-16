import anthropic
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Pais

CHAT_MODEL = "claude-opus-4-8"

SYSTEM_INTRO = (
    "Eres el asistente virtual del sitio web \"Culturas\", que presenta Japón, "
    "Corea del Sur y Chile. Responde preguntas del visitante usando solo la "
    "información entregada a continuación sobre cada país, su cultura, "
    "gastronomía y paisajes. Si te preguntan algo que no está en esta "
    "información, dilo honestamente en vez de inventar datos. Responde en "
    "español, de forma breve, cercana y sin markdown."
)


def construir_contexto_paises():
    bloques = [SYSTEM_INTRO]
    for pais in Pais.objects.prefetch_related("comidas", "paisajes").all():
        bloques.append(
            f"\n## {pais.nombre} ({pais.glifo})\n"
            f"Lema: {pais.lema}\n"
            f"Introducción: {pais.intro}\n"
            f"Cultura — {pais.cultura_titulo}: {pais.cultura_texto}"
        )
        for comida in pais.comidas.all():
            bloques.append(f"Comida — {comida.nombre}: {comida.texto}")
        for paisaje in pais.paisajes.all():
            bloques.append(
                f"Paisaje — {paisaje.titulo} ({paisaje.ubicacion}): "
                f"{paisaje.descripcion} Mejor época: {paisaje.epoca}"
            )
    return "\n".join(bloques)


class ChatView(APIView):
    def post(self, request):
        mensaje = (request.data.get("message") or "").strip()
        if not mensaje:
            return Response({"error": "El mensaje no puede estar vacío."}, status=400)

        if not settings.ANTHROPIC_API_KEY:
            return Response(
                {"error": "El chatbot no está configurado (falta ANTHROPIC_API_KEY)."},
                status=503,
            )

        historial = [
            {"role": turno["role"], "content": turno["content"]}
            for turno in request.data.get("history", [])
            if turno.get("role") in ("user", "assistant") and turno.get("content")
        ]
        mensajes = historial + [{"role": "user", "content": mensaje}]

        client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        try:
            respuesta = client.messages.create(
                model=CHAT_MODEL,
                max_tokens=1024,
                system=construir_contexto_paises(),
                messages=mensajes,
            )
        except anthropic.APIStatusError as err:
            return Response(
                {"error": f"Error del servicio de IA: {err.message}"}, status=502
            )
        except anthropic.APIConnectionError:
            return Response(
                {"error": "No se pudo conectar con el servicio de IA."}, status=502
            )

        texto = next(
            (bloque.text for bloque in respuesta.content if bloque.type == "text"), ""
        )
        return Response({"reply": texto})
