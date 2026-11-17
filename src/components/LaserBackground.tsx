import { useEffect, useRef } from "react";

/**
 * Fundo animado do topo do site: matriz de microfeixes de laser fracionado
 * com um feixe de varredura que "acende" os pontos e deixa um brilho de
 * regeneração que se apaga devagar.
 */
const TEAL = "64, 224, 208";
const SPACING = 26; // distância entre os microfeixes (px CSS)
const SWEEP_MS = 9000; // tempo de uma passada do feixe

const LaserBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let glow = new Float32Array(0);
    let raf = 0;
    let running = true;
    let start = performance.now();
    let lastBeamX = -1;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / SPACING) + 1;
      rows = Math.ceil(height / SPACING) + 1;
      glow = new Float32Array(cols * rows);
      lastBeamX = -1;
    };

    // pequena variação fixa por ponto, para o padrão não parecer "de planilha"
    const jitter = (i: number) => {
      const s = Math.sin(i * 12.9898) * 43758.5453;
      return s - Math.floor(s);
    };

    const draw = (now: number) => {
      const t = ((now - start) % SWEEP_MS) / SWEEP_MS;
      const span = width * 1.3;
      const beamX = reduceMotion ? width * 0.62 : -width * 0.15 + t * span;

      ctx.clearRect(0, 0, width, height);

      // brilhos difusos de fundo
      const g1 = ctx.createRadialGradient(width * 0.78, height * 0.35, 0, width * 0.78, height * 0.35, width * 0.55);
      g1.addColorStop(0, `rgba(${TEAL}, 0.16)`);
      g1.addColorStop(1, `rgba(${TEAL}, 0)`);
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(width * 0.2, height * 0.9, 0, width * 0.2, height * 0.9, width * 0.4);
      g2.addColorStop(0, `rgba(${TEAL}, 0.08)`);
      g2.addColorStop(1, `rgba(${TEAL}, 0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // pontos atingidos pelo feixe nesta passada
      const crossedFrom = lastBeamX < 0 || beamX < lastBeamX ? beamX - 2 : lastBeamX;
      lastBeamX = beamX;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = c * SPACING + (r % 2 ? SPACING / 2 : 0);
          const y = r * SPACING;
          if (x >= crossedFrom && x <= beamX + 1) glow[i] = 0.6 + jitter(i) * 0.4;
          else glow[i] *= reduceMotion ? 1 : 0.985;

          const near = Math.max(0, 1 - Math.abs(x - beamX) / 60);
          const intensity = Math.min(1, glow[i] + near * 0.5);
          const base = 0.07 + jitter(i + 7) * 0.05;
          const alpha = base + intensity * 0.75;
          const radius = 1 + intensity * 1.6;

          if (intensity > 0.25) {
            ctx.fillStyle = `rgba(${TEAL}, ${intensity * 0.18})`;
            ctx.beginPath();
            ctx.arc(x, y, radius * 3.2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = `rgba(${TEAL}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // o feixe
      const beam = ctx.createLinearGradient(beamX - 90, 0, beamX + 30, 0);
      beam.addColorStop(0, `rgba(${TEAL}, 0)`);
      beam.addColorStop(0.75, `rgba(${TEAL}, 0.10)`);
      beam.addColorStop(0.97, `rgba(${TEAL}, 0.55)`);
      beam.addColorStop(1, `rgba(${TEAL}, 0)`);
      ctx.fillStyle = beam;
      ctx.fillRect(beamX - 90, 0, 120, height);
      ctx.fillStyle = "rgba(220, 255, 250, 0.7)";
      ctx.fillRect(beamX - 0.5, 0, 1, height);

      if (running && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    const play = () => {
      if (reduceMotion) return;
      cancelAnimationFrame(raf);
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (reduceMotion) draw(performance.now());
    else play();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()));
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

export default LaserBackground;
