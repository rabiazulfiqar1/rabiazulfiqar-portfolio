import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulseOffset: number;
  layer: number; // 0 = large/bright, 1 = medium, 2 = small/dim
}

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let W = 0;
    let H = 0;
    let time = 0;

    const nodes: Node[] = [];
    const EDGE_DIST = 180;

    const resize = () => {
      W = window.innerWidth;
      H = document.documentElement.scrollHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const init = () => {
      nodes.length = 0;
      const count = Math.min(100, Math.floor((W * H) / 18000));
      for (let i = 0; i < count; i++) {
        const layer = i < count * 0.15 ? 0 : i < count * 0.5 ? 1 : 2;
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: layer === 0 ? 3.5 + Math.random() * 1.5 : layer === 1 ? 2 + Math.random() * 1 : 1 + Math.random() * 0.8,
          pulseOffset: Math.random() * Math.PI * 2,
          layer,
        });
      }
    };

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y + window.scrollY;

      // Update positions
      for (const n of nodes) {
        const dx = mx - n.x;
        const dy = my - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          n.x -= dx * 0.004;
          n.y -= dy * 0.004;
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -30) n.x = W + 30;
        if (n.x > W + 30) n.x = -30;
        if (n.y < -30) n.y = H + 30;
        if (n.y > H + 30) n.y = -30;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < EDGE_DIST) {
            const alpha = 0.12 * (1 - d / EDGE_DIST);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Energy pulse particle traveling along edge
            const pulseT = ((time * 0.5 + i * 0.1 + j * 0.07) % 1);
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulseT;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulseT;
            if (d < EDGE_DIST * 0.7) {
              ctx.beginPath();
              ctx.arc(px, py, 1.2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 2.5})`;
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = Math.sin(time * 2 + n.pulseOffset) * 0.15 + 0.85;
        let alpha: number;
        let glowSize: number;

        if (n.layer === 0) {
          alpha = 0.7 * pulse;
          glowSize = 10;
        } else if (n.layer === 1) {
          alpha = 0.45 * pulse;
          glowSize = 5;
        } else {
          alpha = 0.25 * pulse;
          glowSize = 2;
        }

        // Outer glow
        if (n.layer < 2) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + glowSize, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, n.r + glowSize);
          grad.addColorStop(0, `rgba(16, 185, 129, ${alpha * 0.3})`);
          grad.addColorStop(1, "rgba(16, 185, 129, 0)");
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.fill();

        // Bright center
        if (n.layer === 0) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 255, 230, ${alpha * 0.6})`;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    resize();
    init();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onResize = () => { resize(); init(); };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}