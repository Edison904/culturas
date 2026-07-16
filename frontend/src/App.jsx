import "./App.css";
import { CulturasProvider, useCulturas } from "./context/CulturasContext";
import Navbar from "./components/Navbar";
import FondoEscena from "./components/FondoEscena";
import FondoParticulas from "./components/FondoParticulas";
import Inicio from "./components/Inicio";
import HeroPais from "./components/HeroPais";
import SeccionCultura from "./components/SeccionCultura";
import GridComidas from "./components/GridComidas";
import GaleriaPaisajes from "./components/GaleriaPaisajes";
import LightboxPaisaje from "./components/LightboxPaisaje";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function Contenido() {
  const { cargando, error, paisActivo, paisDatos } = useCulturas();

  if (cargando) {
    return <div className="estado-carga">Cargando culturas…</div>;
  }

  if (error) {
    return (
      <div className="estado-carga estado-carga--error">
        No se pudo conectar con la API ({error})
      </div>
    );
  }

  return (
    <>
      <FondoEscena />
      <FondoParticulas />
      <div className="fondo-vignette" />

      <div className="page-content">
        <Navbar />

        {paisActivo === "inicio" && <Inicio />}

        {paisActivo !== "inicio" && paisDatos && (
          <main style={{ animation: "aparecer .8s ease both" }}>
            <HeroPais pais={paisDatos} />
            <SeccionCultura pais={paisDatos} />
            <GridComidas pais={paisDatos} />
            <GaleriaPaisajes pais={paisDatos} />
          </main>
        )}

        <LightboxPaisaje />
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

export default function App() {
  return (
    <CulturasProvider>
      <Contenido />
    </CulturasProvider>
  );
}
