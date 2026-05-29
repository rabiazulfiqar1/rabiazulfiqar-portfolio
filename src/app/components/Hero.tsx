import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";

const roles = [
  "AI Researcher",
  "Full-Stack Developer",
  "Data Analyst",
  "CS @ FAST NU",
];


export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (text.length < role.length) {
        timer = setTimeout(() => setText(role.slice(0, text.length + 1)), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  // Canvas edges + pulses
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let time = 0;

    // Terminal lines — code snippets that scroll
    const terminalLines = [
      "$ python train_model.py --epochs 50",
      ">>> Loading dataset... OK",
      ">>> Preprocessing features...",
      "$ docker compose up -d",
      "  ✓ Container postgres  Started",
      "  ✓ Container redis     Started",
      "  ✓ Container fastapi   Started",
      "$ git push origin main",
      "  remote: Resolving deltas: 100%",
      ">>> import torch",
      ">>> model = TransformerNet()",
      "$ npm run build",
      "  ✓ Compiled successfully",
      "  ✓ Bundle size: 142kB gzipped",
      ">>> accuracy: 0.9847",
      ">>> loss: 0.0312",
      "$ kubectl apply -f deploy.yaml",
      "  deployment/api configured",
      ">>> SELECT * FROM embeddings",
      "  → 2,847 rows returned (12ms)",
      "$ pytest tests/ -v --cov",
      "  PASSED test_api.py::test_health",
      "  PASSED test_model.py::test_predict",
      "  coverage: 94%",
      ">>> pipeline.fit(X_train, y_train)",
      "$ ssh rabia@gpu-cluster",
      "  Welcome to Ubuntu 22.04 LTS",
      ">>> torch.cuda.is_available()",
      "  True  (NVIDIA A100 80GB)",
      "$ redis-cli PING",
      "  PONG",
    ];

    const lineHeight = 20;
    let scrollOffset = 0;

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const W = rect.width;
      const H = rect.height;
      time += 0.005;
      scrollOffset += 0.35;

      ctx.clearRect(0, 0, W, H);

      // Terminal window dimensions
      const pad = 20;
      const titleBarH = 44;
      const radius = 14;
      const tx = pad;
      const ty = pad + 20;
      const tw = W - pad * 2;
      const th = H - pad * 2 - 20;

      // Drop shadow (large, soft)
      ctx.save();
      ctx.shadowColor = "rgba(16, 185, 129, 0.15)";
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 12;
      roundRect(tx, ty, tw, th, radius);
      ctx.fillStyle = "#0f0f1e";
      ctx.fill();
      ctx.restore();

      // Terminal window body fill
      roundRect(tx, ty, tw, th, radius);
      ctx.fillStyle = "#111122";
      ctx.fill();

      // Window border (brighter)
      roundRect(tx, ty, tw, th, radius);
      ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Title bar fill
      ctx.save();
      ctx.beginPath();
      ctx.rect(tx, ty, tw, titleBarH);
      ctx.clip();
      roundRect(tx, ty, tw, titleBarH + radius, radius);
      ctx.fillStyle = "#1a1a2e";
      ctx.fill();
      ctx.restore();

      // Title bar bottom border
      ctx.beginPath();
      ctx.moveTo(tx + 1, ty + titleBarH);
      ctx.lineTo(tx + tw - 1, ty + titleBarH);
      ctx.strokeStyle = "rgba(16, 185, 129, 0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Traffic light buttons
      const btnY = ty + titleBarH / 2;
      const btnX = tx + 22;
      const btnR = 7;
      const btnGap = 22;

      // Close (red)
      ctx.beginPath();
      ctx.arc(btnX, btnY, btnR, 0, Math.PI * 2);
      ctx.fillStyle = "#FF5F57";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(btnX, btnY, btnR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,95,87,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Minimize (yellow)
      ctx.beginPath();
      ctx.arc(btnX + btnGap, btnY, btnR, 0, Math.PI * 2);
      ctx.fillStyle = "#FEBC2E";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(btnX + btnGap, btnY, btnR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(254,188,46,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Maximize (green)
      ctx.beginPath();
      ctx.arc(btnX + btnGap * 2, btnY, btnR, 0, Math.PI * 2);
      ctx.fillStyle = "#28C840";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(btnX + btnGap * 2, btnY, btnR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(40,200,64,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Title text
      ctx.font = "600 13px 'JetBrains Mono', 'Fira Code', 'Courier New', monospace";
      ctx.fillStyle = "rgba(200, 210, 230, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText("rabia@dev ~ zsh", tx + tw / 2, btnY + 5);
      ctx.textAlign = "left";

      // Body area
      const bodyX = tx;
      const bodyY = ty + titleBarH;
      const bodyW = tw;
      const bodyH = th - titleBarH;

      // Clip body with bottom rounded corners
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(bodyX, bodyY);
      ctx.lineTo(bodyX + bodyW, bodyY);
      ctx.lineTo(bodyX + bodyW, bodyY + bodyH - radius);
      ctx.quadraticCurveTo(bodyX + bodyW, bodyY + bodyH, bodyX + bodyW - radius, bodyY + bodyH);
      ctx.lineTo(bodyX + radius, bodyY + bodyH);
      ctx.quadraticCurveTo(bodyX, bodyY + bodyH, bodyX, bodyY + bodyH - radius);
      ctx.lineTo(bodyX, bodyY);
      ctx.closePath();
      ctx.clip();

      // Terminal body text
      const textPadX = bodyX + 20;
      const textPadY = bodyY + 12;
      ctx.font = "13px 'JetBrains Mono', 'Fira Code', 'Courier New', monospace";

      const totalHeight = terminalLines.length * lineHeight;
      const baseOffset = -(scrollOffset % totalHeight);

      for (let pass = -1; pass <= 1; pass++) {
        for (let i = 0; i < terminalLines.length; i++) {
          const y = textPadY + baseOffset + pass * totalHeight + i * lineHeight + lineHeight;
          if (y < bodyY - lineHeight || y > bodyY + bodyH + lineHeight) continue;

          const line = terminalLines[i];
          const fadeTop = Math.min(1, Math.max(0, (y - bodyY) / 25));
          const fadeBottom = Math.min(1, Math.max(0, (bodyY + bodyH - y) / 25));
          const alpha = fadeTop * fadeBottom;

          if (line.startsWith("$")) {
            ctx.fillStyle = `rgba(80, 250, 123, ${alpha})`;
            ctx.fillText("$ ", textPadX, y);
            const promptW = ctx.measureText("$ ").width;
            ctx.fillStyle = `rgba(220, 190, 255, ${alpha})`;
            ctx.fillText(line.slice(2), textPadX + promptW, y);
          } else if (line.startsWith(">>>")) {
            ctx.fillStyle = `rgba(6, 210, 235, ${alpha})`;
            ctx.fillText(">>> ", textPadX, y);
            const promptW = ctx.measureText(">>> ").width;
            ctx.fillStyle = `rgba(200, 240, 255, ${alpha})`;
            ctx.fillText(line.slice(4), textPadX + promptW, y);
          } else if (line.includes("✓") || line.includes("PASSED")) {
            ctx.fillStyle = `rgba(80, 250, 123, ${alpha})`;
            ctx.fillText(line, textPadX, y);
          } else if (line.includes("→") || line.includes("True")) {
            ctx.fillStyle = `rgba(255, 184, 50, ${alpha})`;
            ctx.fillText(line, textPadX, y);
          } else {
            ctx.fillStyle = `rgba(180, 195, 220, ${alpha * 0.9})`;
            ctx.fillText(line, textPadX, y);
          }
        }
      }

      // Blinking block cursor at bottom
      const cursorBlink = Math.sin(time * 8) > 0;
      if (cursorBlink) {
        const cursorY = bodyY + bodyH - 28;
        ctx.fillStyle = "rgba(80, 250, 123, 0.9)";
        ctx.fillRect(textPadX, cursorY, 9, 17);
      }

      // Very subtle scanlines
      for (let sy = bodyY; sy < bodyY + bodyH; sy += 4) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.025)";
        ctx.fillRect(bodyX, sy, bodyW, 1);
      }

      ctx.restore();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              color: "#F1F5F9",
              fontSize:"clamp(3rem, 10vw, 7rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            RABIA{" "}
            <span style={{ color: "#10B981" }}>ZULFIQAR</span>
            <br />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-1 h-5 rounded-full" style={{ background: "#10B981" }} />
            <span style={{ color: "#10B981", fontFamily: "Inter" }}>
              {text}
              <span className="animate-pulse ml-0.5">|</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ background: "#10B981", color: "#F1F5F9", fontFamily: "Inter", fontWeight: 500 }}
            >
              <ArrowDown size={18} /> View My Work
            </button>
            <button
              onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg flex items-center gap-2 border transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ borderColor: "rgba(16,185,129,0.4)", color: "#10B981", fontFamily: "Inter", fontWeight: 500, background: "transparent" }}
            >
              <Download size={18} /> View Resume
            </button>
          </motion.div>
        </div>

        {/* Right: Terminal display */}
        <div ref={containerRef} className="relative w-full aspect-square max-w-xl mx-auto hidden lg:block">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    </section>
  );
}