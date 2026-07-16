import { useEffect, useState } from "react";
import { useCulturas } from "../context/CulturasContext";

export default function Navbar() {
  const { paises, paisActivo, cambiarPais } = useCulturas();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pestanas = [{ clave: "inicio", etiqueta: "Inicio" }].concat(
    paises.map((p) => ({ clave: p.clave, etiqueta: p.nombre }))
  );

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__brand">
        <span className="navbar__brand-title">CULTURAS</span>
        <span className="navbar__brand-sub">日本 · 한국 · CL</span>
      </div>
      <div className="navbar__tabs">
        {pestanas.map((tab) => (
          <button
            key={tab.clave}
            className={`navbar__tab ${
              paisActivo === tab.clave ? "navbar__tab--active" : ""
            }`}
            onClick={() => cambiarPais(tab.clave)}
          >
            {tab.etiqueta}
          </button>
        ))}
      </div>
    </nav>
  );
}
