import { useCulturas } from "../context/CulturasContext";

export default function Inicio() {
  const { paises, cambiarPais } = useCulturas();

  return (
    <header className="inicio">
      <div className="inicio__contenido">
        <div className="inicio__eyebrow">
          <span className="inicio__eyebrow-line" />
          Un viaje por las culturas del mundo
          <span className="inicio__eyebrow-line" />
        </div>
        <h1 className="inicio__title">
          {paises.map((p, i) => (
            <span key={p.clave}>
              {i > 0 && <span className="inicio__title-sep"> · </span>}
              {p.nombre}
            </span>
          ))}
        </h1>
        <p className="inicio__lead">
          Tres naciones, tres paisajes, tres maneras de entender el mundo. Elige un país y
          sumérgete en su cultura, su comida y sus escenarios naturales.
        </p>
        <div className="inicio__accesos">
          {paises.map((p) => (
            <div
              key={p.clave}
              className="acceso-card"
              onClick={() => cambiarPais(p.clave)}
            >
              <span className="acceso-card__glifo">{p.glifo}</span>
              <span className="acceso-card__nombre">{p.nombre}</span>
              <span className="acceso-card__lema">{p.lema}</span>
              <span className="acceso-card__cta">Explorar →</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
