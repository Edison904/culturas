import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { obtenerPaises } from "../api";

const CulturasContext = createContext(null);

export function CulturasProvider({ children }) {
  const [paises, setPaises] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [paisActivo, setPaisActivoState] = useState("inicio");
  const [paisajeSeleccionado, setPaisajeSeleccionado] = useState(null);

  useEffect(() => {
    obtenerPaises()
      .then(setPaises)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  const paisDatos = useMemo(
    () => paises.find((p) => p.clave === paisActivo) || null,
    [paises, paisActivo]
  );

  function cambiarPais(clave) {
    setPaisActivoState(clave);
    setPaisajeSeleccionado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function abrirPaisaje(paisaje) {
    setPaisajeSeleccionado({
      ...paisaje,
      paisNombre: paisDatos?.nombre,
      paisGlifo: paisDatos?.glifo,
    });
  }

  function cerrarPaisaje() {
    setPaisajeSeleccionado(null);
  }

  const valor = {
    paises,
    cargando,
    error,
    paisActivo,
    paisDatos,
    cambiarPais,
    paisajeSeleccionado,
    abrirPaisaje,
    cerrarPaisaje,
  };

  return (
    <CulturasContext.Provider value={valor}>{children}</CulturasContext.Provider>
  );
}

export function useCulturas() {
  const ctx = useContext(CulturasContext);
  if (!ctx) {
    throw new Error("useCulturas debe usarse dentro de <CulturasProvider>");
  }
  return ctx;
}
