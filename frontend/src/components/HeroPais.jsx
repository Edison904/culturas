export default function HeroPais({ pais }) {
  return (
    <header className="hero-pais">
      <div className="hero-pais__contenido">
        <span className="hero-pais__glifo" style={{ color: pais.acento }}>
          {pais.glifo}
        </span>
        <h1 className="hero-pais__title">{pais.nombre}</h1>
        <span className="hero-pais__lema">{pais.lema}</span>
        <p className="hero-pais__intro">{pais.intro}</p>
      </div>
      <div className="hero-pais__scroll">
        <span className="hero-pais__scroll-label">Desliza</span>
        <span className="hero-pais__scroll-line" />
      </div>
    </header>
  );
}
