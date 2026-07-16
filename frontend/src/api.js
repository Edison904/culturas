const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function obtenerPaises() {
  const res = await fetch(`${API_BASE}/api/paises/`);
  if (!res.ok) {
    throw new Error(`No se pudo cargar /api/paises/ (${res.status})`);
  }
  return res.json();
}

export async function enviarMensajeChat(message, history) {
  const res = await fetch(`${API_BASE}/api/chat/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || `No se pudo contactar al chatbot (${res.status})`);
  }
  return data.reply;
}
