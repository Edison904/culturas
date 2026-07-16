import { useEffect, useRef, useState } from "react";
import { enviarMensajeChat } from "../api";

const SALUDO = {
  role: "assistant",
  content:
    "¡Hola! Soy el asistente de Culturas. Pregúntame sobre Japón, Corea del Sur o Chile: su cultura, gastronomía o paisajes.",
};

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([SALUDO]);
  const [entrada, setEntrada] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(null);
  const finRef = useRef(null);

  useEffect(() => {
    if (abierto) {
      finRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensajes, abierto]);

  async function manejarEnvio(e) {
    e.preventDefault();
    const texto = entrada.trim();
    if (!texto || enviando) return;

    const historial = mensajes
      .filter((m) => m !== SALUDO)
      .map((m) => ({ role: m.role, content: m.content }));

    setMensajes((prev) => [...prev, { role: "user", content: texto }]);
    setEntrada("");
    setEnviando(true);
    setError(null);

    try {
      const respuesta = await enviarMensajeChat(texto, historial);
      setMensajes((prev) => [...prev, { role: "assistant", content: respuesta }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="chatbot">
      <button
        className="chatbot__boton"
        onClick={() => setAbierto((v) => !v)}
        aria-label={abierto ? "Cerrar chat" : "Abrir chat"}
      >
        {abierto ? "✕" : "文"}
      </button>

      {abierto && (
        <div className="chatbot__panel">
          <div className="chatbot__header">
            <span>Asistente Culturas</span>
          </div>
          <div className="chatbot__mensajes">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={`chatbot__burbuja chatbot__burbuja--${m.role}`}
              >
                {m.content}
              </div>
            ))}
            {enviando && (
              <div className="chatbot__burbuja chatbot__burbuja--assistant chatbot__burbuja--cargando">
                Escribiendo…
              </div>
            )}
            {error && <div className="chatbot__error">{error}</div>}
            <div ref={finRef} />
          </div>
          <form className="chatbot__form" onSubmit={manejarEnvio}>
            <input
              className="chatbot__input"
              type="text"
              placeholder="Pregunta sobre Japón, Corea o Chile…"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              disabled={enviando}
            />
            <button
              className="chatbot__enviar"
              type="submit"
              disabled={enviando || !entrada.trim()}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
