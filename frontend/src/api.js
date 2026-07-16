const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function obtenerPaises() {
  const res = await fetch(`${API_BASE}/api/paises/`);
  if (!res.ok) {
    throw new Error(`No se pudo cargar /api/paises/ (${res.status})`);
  }
  return res.json();
}
