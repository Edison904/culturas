import { useEffect, useRef } from "react";
import { useCulturas } from "../context/CulturasContext";

const TEMAS = {
  japon: {
    colores: ["#f2a0b5", "#e8798f"],
    puntos: "#ece7de",
    glifos: ["桜", "富", "士", "花"],
    sube: false,
    viento: 0.6,
  },
  corea: {
    colores: ["#e5b567", "#f0cd93"],
    puntos: "#f2a0b5",
    glifos: ["한", "달", "빛", "꽃"],
    sube: true,
    viento: 0.3,
  },
  chile: {
    colores: ["#dce8f2", "#aac4d8"],
    puntos: "#7ea8c4",
    glifos: [],
    sube: false,
    viento: 1.6,
  },
  inicio: {
    colores: ["#b8352b", "#d0453a"],
    puntos: "#e5b567",
    glifos: ["桜", "月", "山", "道", "한", "달", "산", "길"],
    sube: false,
    viento: 0.4,
  },
};

const DENSIDAD = 60;
const VELOCIDAD = 1;

function crearParticulas(tema, ancho, alto) {
  const particulas = [];
  for (let i = 0; i < DENSIDAD; i++) {
    const azar = Math.random();
    const punto = azar < 0.3;
    const glifo =
      tema.glifos.length && azar > 0.9
        ? tema.glifos[Math.floor(Math.random() * tema.glifos.length)]
        : null;
    particulas.push({
      glifo,
      tam: 18 + Math.random() * 28,
      x: Math.random() * ancho,
      y: Math.random() * alto,
      r: punto ? 1 + Math.random() * 1.8 : 2.5 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (0.15 + Math.random() * 0.45) * (tema.sube ? -0.7 : 1),
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.02,
      fase: Math.random() * Math.PI * 2,
      punto,
      color: punto ? tema.puntos : tema.colores[Math.floor(Math.random() * tema.colores.length)],
      alpha: 0.25 + Math.random() * 0.45,
    });
  }
  return particulas;
}

export default function FondoParticulas() {
  const { paisActivo } = useCulturas();
  const canvasRef = useRef(null);
  const particulasRef = useRef([]);
  const vientoRef = useRef(0);
  const dimsRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999 };

    const redimensionar = () => {
      dimsRef.current.w = canvas.width = window.innerWidth;
      dimsRef.current.h = canvas.height = window.innerHeight;
    };
    redimensionar();
    window.addEventListener("resize", redimensionar);

    const onMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouse);

    let raf;
    const dibujar = () => {
      const { w: W, h: H } = dimsRef.current;
      ctx.clearRect(0, 0, W, H);
      for (const p of particulasRef.current) {
        p.fase += 0.008 * VELOCIDAD;
        p.x += (p.vx + Math.sin(p.fase) * 0.3 + vientoRef.current * 0.4) * VELOCIDAD;
        p.y += p.vy * VELOCIDAD;
        p.rot += p.vr * VELOCIDAD;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14400) {
          const d = Math.sqrt(d2) || 1;
          p.x += (dx / d) * 0.8;
          p.y += (dy / d) * 0.8;
        }

        if (p.y > H + 24) {
          p.y = -24;
          p.x = Math.random() * W;
        }
        if (p.y < -24) {
          p.y = H + 24;
          p.x = Math.random() * W;
        }
        if (p.x > W + 24) p.x = -24;
        if (p.x < -24) p.x = W + 24;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.glifo ? Math.sin(p.fase) * 0.15 : p.rot);
        ctx.globalAlpha = p.alpha * (0.75 + 0.25 * Math.sin(p.fase * 2));
        if (p.glifo) {
          ctx.globalAlpha *= 0.35;
          ctx.fillStyle = p.color;
          ctx.font = p.tam + "px 'Shippori Mincho', serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.glifo, 0, 0);
        } else if (p.punto) {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(dibujar);
    };
    raf = requestAnimationFrame(dibujar);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", redimensionar);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  useEffect(() => {
    const tema = TEMAS[paisActivo] || TEMAS.inicio;
    vientoRef.current = tema.viento;
    particulasRef.current = crearParticulas(tema, dimsRef.current.w, dimsRef.current.h);
  }, [paisActivo]);

  return <canvas ref={canvasRef} className="fondo-particulas" />;
}
