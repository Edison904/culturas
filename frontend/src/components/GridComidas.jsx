export default function GridComidas({ pais }) {
  return (
    <section className="grid-comidas">
      <div className="grid-comidas__header">
        <span className="grid-comidas__eyebrow">Gastronomía</span>
        <h2 className="grid-comidas__title">Sabores de {pais.nombre}</h2>
      </div>
      <div className="grid-comidas__grid">
        {pais.comidas.map((c) => (
          <div key={c.id} className="comida-card">
            <span className="comida-card__glifo" style={{ color: pais.acento }}>
              {c.glifo}
            </span>
            <h3 className="comida-card__nombre">{c.nombre}</h3>
            <p className="comida-card__texto">{c.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
