import { useCulturas } from "../context/CulturasContext";

export default function GaleriaPaisajes({ pais }) {
  const { abrirPaisaje } = useCulturas();

  return (
    <section className="galeria-paisajes">
      <span className="galeria-paisajes__eyebrow">Paisajes</span>
      <h2 className="galeria-paisajes__title">{pais.paisajes_titulo}</h2>
      <div className="galeria-paisajes__grid">
        {pais.paisajes.map((pj) => (
          <figure
            key={pj.id}
            className="paisaje-figure"
            onClick={() => abrirPaisaje(pj)}
          >
            {pj.imagen ? (
              <img className="paisaje-figure__img" src={pj.imagen} alt={pj.titulo} />
            ) : (
              <div className="paisaje-figure__placeholder">
                <span>[ foto: {pj.titulo} ]</span>
              </div>
            )}
            <figcaption className="paisaje-figure__caption">
              <span className="paisaje-figure__titulo">{pj.titulo}</span>
              <span className="paisaje-figure__cta">Ver información →</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
