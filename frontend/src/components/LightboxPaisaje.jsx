import { useCulturas } from "../context/CulturasContext";

export default function LightboxPaisaje() {
  const { paisajeSeleccionado, cerrarPaisaje } = useCulturas();

  if (!paisajeSeleccionado) return null;
  const sel = paisajeSeleccionado;

  return (
    <div className="lightbox-overlay" onClick={cerrarPaisaje}>
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox__media">
          {sel.imagen && <img src={sel.imagen} alt={sel.titulo} />}
        </div>
        <div className="lightbox__info">
          <span className="lightbox__eyebrow">
            {sel.paisNombre} · {sel.paisGlifo}
          </span>
          <h3 className="lightbox__title">{sel.titulo}</h3>
          <span className="lightbox__ubicacion">📍 {sel.ubicacion}</span>
          <p className="lightbox__descripcion">{sel.descripcion}</p>
          <span className="lightbox__epoca">
            <strong>Mejor época:</strong> {sel.epoca}
          </span>
          <button className="lightbox__cerrar" onClick={cerrarPaisaje}>
            Cerrar ✕
          </button>
        </div>
      </div>
    </div>
  );
}
