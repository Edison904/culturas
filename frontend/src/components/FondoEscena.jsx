import { useCulturas } from "../context/CulturasContext";

const CIELOS = {
  inicio: "linear-gradient(to bottom, #0c0b0e, #16121a)",
  japon: "linear-gradient(to bottom, #120d16, #241521)",
  corea: "linear-gradient(to bottom, #0d0f14, #1a161c)",
  chile: "linear-gradient(to bottom, #0a0e16, #131a26)",
};
const CIELO_DEFECTO = "linear-gradient(to bottom, #0c0b0e, #16121a)";

function EscenaInicio() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "12%",
          width: "min(38vw, 460px)",
          aspectRatio: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 42% 38%, rgba(208,69,58,0.55), rgba(126,31,24,0.28) 60%, transparent 72%)",
          filter: "blur(2px)",
          animation: "lunaLatido 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-6%",
          width: "60%",
          height: "32vh",
          background:
            "linear-gradient(to top, rgba(24,17,22,0.9), rgba(24,17,22,0.4))",
          clipPath:
            "polygon(0 100%, 18% 34%, 34% 62%, 52% 12%, 70% 58%, 88% 30%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "-8%",
          width: "70%",
          height: "26vh",
          background:
            "linear-gradient(to top, rgba(31,20,20,0.85), rgba(31,20,20,0.3))",
          clipPath:
            "polygon(0 100%, 14% 48%, 30% 20%, 48% 66%, 64% 26%, 82% 56%, 100% 18%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(46vw, 420px)",
          height: "min(30vw, 300px)",
          opacity: 0.16,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-6%",
            width: "112%",
            height: "7%",
            background: "#b8352b",
            borderRadius: "3px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "14%",
            left: "2%",
            width: "96%",
            height: "5%",
            background: "#b8352b",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "4%",
            bottom: 0,
            left: "14%",
            width: "6%",
            background: "#b8352b",
            transform: "rotate(2deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "4%",
            bottom: 0,
            right: "14%",
            width: "6%",
            background: "#b8352b",
            transform: "rotate(-2deg)",
          }}
        />
      </div>
    </>
  );
}

function EscenaJapon() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "12%",
          width: "min(30vw, 340px)",
          aspectRatio: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 35%, rgba(242,160,181,0.4), rgba(184,53,43,0.18) 60%, transparent 72%)",
          filter: "blur(2px)",
          animation: "lunaLatido 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "140vw",
          height: "44vh",
          background:
            "linear-gradient(to top, rgba(26,18,26,0.95), rgba(40,26,38,0.55))",
          clipPath: "polygon(0 100%, 38% 12%, 44% 4%, 50% 0, 56% 4%, 62% 12%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140vw",
          height: "14vh",
          background: "rgba(236,231,222,0.5)",
          filter: "blur(1px)",
          clipPath:
            "polygon(38% 58%, 44% 18%, 50% 0, 56% 18%, 62% 58%, 58% 48%, 55% 66%, 50% 42%, 46% 68%, 42% 50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          left: "-10%",
          width: "120%",
          height: "80px",
          background:
            "linear-gradient(to right, transparent, rgba(236,231,222,0.07), transparent)",
          filter: "blur(14px)",
          animation: "neblina 24s ease-in-out infinite",
        }}
      />
    </>
  );
}

function EscenaCorea() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "7%",
          right: "16%",
          width: "min(30vw, 320px)",
          aspectRatio: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 42% 38%, rgba(229,181,103,0.5), rgba(229,181,103,0.15) 62%, transparent 74%)",
          filter: "blur(2px)",
          animation: "lunaLatido 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-10%",
          width: "75%",
          height: "30vh",
          background:
            "linear-gradient(to top, rgba(18,22,26,0.92), rgba(18,22,26,0.4))",
          clipPath: "polygon(0 100%, 20% 30%, 42% 64%, 62% 14%, 84% 58%, 100% 36%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "6%",
          width: "min(48vw, 460px)",
          height: "min(24vw, 220px)",
          opacity: 0.28,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "34%",
            background: "#2c3e46",
            clipPath: "polygon(0 100%, 8% 30%, 50% 0, 92% 30%, 100% 100%, 78% 72%, 50% 62%, 22% 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "12%",
            width: "76%",
            height: "26%",
            background: "#b8352b",
            clipPath: "polygon(0 100%, 6% 20%, 50% 0, 94% 20%, 100% 100%, 74% 68%, 50% 60%, 26% 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "72%",
            bottom: 0,
            left: "24%",
            width: "4%",
            background: "#6e2a22",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "72%",
            bottom: 0,
            right: "24%",
            width: "4%",
            background: "#6e2a22",
          }}
        />
      </div>
    </>
  );
}

function EscenaChile() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "9%",
          left: "14%",
          width: "min(26vw, 280px)",
          aspectRatio: 1,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 42% 38%, rgba(168,206,226,0.35), rgba(120,160,190,0.12) 62%, transparent 74%)",
          filter: "blur(2px)",
          animation: "lunaLatido 10s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-8%",
          width: "116%",
          height: "26vh",
          background:
            "linear-gradient(to top, rgba(16,20,28,0.9), rgba(16,20,28,0.35))",
          clipPath:
            "polygon(0 100%, 12% 46%, 26% 70%, 40% 30%, 55% 62%, 72% 40%, 88% 66%, 100% 44%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(70vw, 720px)",
          height: "46vh",
          background:
            "linear-gradient(to top, rgba(30,34,44,0.95), rgba(52,58,74,0.6))",
          clipPath:
            "polygon(0 100%, 16% 78%, 26% 26%, 30% 60%, 36% 70%, 44% 6%, 50% 52%, 56% 64%, 64% 0, 70% 58%, 78% 74%, 100% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(70vw, 720px)",
          height: "12vh",
          background: "rgba(226,234,242,0.35)",
          filter: "blur(1px)",
          clipPath:
            "polygon(24% 80%, 26% 20%, 29% 74%, 42% 90%, 44% 4%, 47% 78%, 62% 86%, 64% 0, 67% 72%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "-10%",
          width: "120%",
          height: "90px",
          background:
            "linear-gradient(to right, transparent, rgba(168,206,226,0.06), transparent)",
          filter: "blur(16px)",
          animation: "neblina 20s ease-in-out infinite",
        }}
      />
    </>
  );
}

function EscenaGenerica({ acento }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "9%",
        right: "14%",
        width: "min(30vw, 320px)",
        aspectRatio: 1,
        borderRadius: "50%",
        background: `radial-gradient(circle at 42% 38%, ${acento}55, ${acento}22 62%, transparent 74%)`,
        filter: "blur(2px)",
        animation: "lunaLatido 9s ease-in-out infinite",
      }}
    />
  );
}

const ESCENAS_CONOCIDAS = {
  japon: EscenaJapon,
  corea: EscenaCorea,
  chile: EscenaChile,
};

export default function FondoEscena() {
  const { paisActivo, paisDatos } = useCulturas();
  const Escena = ESCENAS_CONOCIDAS[paisActivo];
  const cielo = CIELOS[paisActivo] || CIELO_DEFECTO;

  return (
    <div className="fondo-escena" style={{ background: cielo }}>
      {paisActivo === "inicio" && <EscenaInicio />}
      {Escena && <Escena />}
      {!Escena && paisActivo !== "inicio" && paisDatos && (
        <EscenaGenerica acento={paisDatos.acento} />
      )}
    </div>
  );
}
