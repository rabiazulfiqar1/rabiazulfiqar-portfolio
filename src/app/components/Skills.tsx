import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { X } from "lucide-react";
import * as THREE from "three";

interface SkillCategory {
  id: string;
  name: string;
  color: string;
  skills: string[];
  description: string;
  icon: string; // SVG markup
}

// SVG icons for each category (representative)
const svgIcons = {
  data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="6" rx="8" ry="3" stroke="#fff" stroke-width="1.5" fill="none"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#fff" stroke-width="1.5" fill="none"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#fff" stroke-width="1.5" fill="none"/></svg>`,
  db: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.13 4.15c-1.27-.64-2.73-.98-4.13-.98-1.63 0-3.12.48-4.2 1.35-1.1.88-1.72 2.1-1.72 3.52 0 .67.15 1.33.44 1.92.26.53.62 1 1.08 1.4-.1.48-.26 1.17-.3 1.56-.1.84-.02 1.52.24 2.08.27.57.73 1.02 1.4 1.3-.01.4.02.82.1 1.24.18.9.58 1.64 1.2 2.18.63.55 1.42.82 2.36.82.75 0 1.5-.2 2.13-.6.62-.38 1.09-.93 1.35-1.56l.06-.16c.8-.2 1.48-.6 2-1.16.6-.66.93-1.5.93-2.42 0-.32-.05-.63-.15-.93.55-.68.87-1.52.87-2.4 0-.36-.05-.73-.16-1.07.35-.7.53-1.48.53-2.28 0-1.28-.53-2.44-1.5-3.36a3.2 3.2 0 00-.33-.29z" stroke="#fff" stroke-width="1.2" fill="none"/><ellipse cx="10.5" cy="9" rx="1" ry="1.3" fill="#fff"/><ellipse cx="14.5" cy="9" rx="1" ry="1.3" fill="#fff"/></svg>`,
  prog: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9 2C7.3 2 7.7 4 7.7 4l.01 2.1H12v.6H5.5S2 6.3 2 11.9s3.05 5.4 3.05 5.4H6.8v-2.6s-.13-3.05 3-3.05h5.17s2.9.05 2.9-2.8V4.8S18.3 2 11.9 2zm-2.87 1.6a.93.93 0 110 1.86.93.93 0 010-1.86z" fill="#fff"/><path d="M12.1 22c4.6 0 4.2-2 4.2-2l-.01-2.1H12v-.6h6.5S22 17.7 22 12.1s-3.05-5.4-3.05-5.4H17.2v2.6s.13 3.05-3 3.05H9.03s-2.9-.05-2.9 2.8v4.05S5.7 22 12.1 22zm2.87-1.6a.93.93 0 110-1.86.93.93 0 010 1.86z" fill="#fff" opacity="0.7"/></svg>`,
  backend: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#fff" stroke-width="0" fill="#fff" opacity="0.15"/><path d="M8 17V7h6l-3.5 5H14l-6 5z" fill="#fff"/></svg>`,
  frontend: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.2" fill="#fff"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" stroke-width="1" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" stroke-width="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#fff" stroke-width="1" fill="none" transform="rotate(120 12 12)"/></svg>`,
  systems: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 17l6.5-6.5M4 17h4m-4 0v-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 7l-6.5 6.5M20 7h-4m4 0v4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="7" r="3" stroke="#fff" stroke-width="1.2" fill="none"/><circle cx="17" cy="17" r="3" stroke="#fff" stroke-width="1.2" fill="none"/></svg>`,
};

const categories: SkillCategory[] = [
  {
    id: "data", name: "Data Analytics", color: "#10B981", icon: svgIcons.data,
    skills: ["SQL", "Pandas", "Plotly", "Scipy", "Statistical Analysis", "ETL Pipelines"],
    description: "Analyzing large datasets, building ETL pipelines, and deriving actionable insights through statistical methods.",
  },
  {
    id: "db", name: "Databases", color: "#10B981", icon: svgIcons.db,
    skills: ["PostgreSQL", "Supabase", "pgVector", "Redis", "MongoDB"],
    description: "Designing schemas, vector search, caching layers, and both relational and NoSQL data stores.",
  },
  {
    id: "prog", name: "Programming", color: "#10B981", icon: svgIcons.prog,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
    description: "Strong foundations in multiple paradigms — OOP, functional, and systems programming.",
  },
  {
    id: "backend", name: "Backend & APIs", color: "#10B981", icon: svgIcons.backend,
    skills: ["FastAPI", "Node.js", "REST APIs", "Docker", "WebSockets"],
    description: "Building scalable server architectures, real-time APIs, and containerized microservices.",
  },
  {
    id: "frontend", name: "Frontend", color: "#10B981", icon: svgIcons.frontend,
    skills: ["React", "Tailwind CSS", "Streamlit", "HTML/CSS"],
    description: "Crafting responsive, performant user interfaces with modern frameworks.",
  },
  {
    id: "systems", name: "IT & Systems", color: "#10B981", icon: svgIcons.systems,
    skills: ["Linux", "Git", "CI/CD", "Cloud Deploy", "Networking"],
    description: "DevOps workflows, version control, cloud infrastructure, and system administration.",
  },
];

const softSkills = ["Team Leadership", "Project Management", "Communication", "Problem-Solving", "Documentation"];

const graphEdges: [number, number][] = [
  [0, 1], [0, 2], [0, 4],
  [1, 3], [1, 4],
  [2, 4], [2, 5],
  [3, 4], [4, 5],
  [3, 5],
];

// GNN-style positions — more spread, hexagonal-ish
const nodePositions3D: THREE.Vector3[] = [
  new THREE.Vector3(0, 2.5, 0),        // Data Analytics - top
  new THREE.Vector3(-2.3, 0.8, 1.2),   // Databases - left front
  new THREE.Vector3(2.3, 0.8, -1.2),   // Programming - right back
  new THREE.Vector3(-1.8, -1.8, -1.0), // Backend - bottom left
  new THREE.Vector3(0.3, -0.2, 2.2),   // Frontend - center front
  new THREE.Vector3(1.8, -1.8, 1.0),   // IT & Systems - bottom right
];

function ThreeGraph({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    group: THREE.Group;
    nodeSprites: THREE.Sprite[];
    labelSprites: THREE.Sprite[];
    edgeLines: THREE.Line[];
    pulses: THREE.Sprite[];
    pulses2: THREE.Sprite[];
    iconTextures: (THREE.CanvasTexture | null)[];
  } | null>(null);
  const animRef = useRef(0);
  const isDraggingRef = useRef(false);
  const prevMouseXRef = useRef(0);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const wasDragRef = useRef(false);
  const autoRotateRef = useRef(true);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Create icon canvas texture
  const createIconTexture = (
    svgMarkup: string,
    color: string,
    isSelected: boolean,
    size = 256
  ): THREE.CanvasTexture => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2 - 12;

    // Outer glow
    const glowGrad = ctx.createRadialGradient(cx, cy, r * 0.5, cx, cy, r);
    glowGrad.addColorStop(0, color + (isSelected ? "35" : "18"));
    glowGrad.addColorStop(1, "transparent");
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    // Inner circle
    const innerR = r * 0.65;
    const innerGrad = ctx.createRadialGradient(cx, cy - innerR * 0.15, 0, cx, cy, innerR);
    innerGrad.addColorStop(0, color + (isSelected ? "DD" : "88"));
    innerGrad.addColorStop(1, color + (isSelected ? "99" : "55"));
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.fillStyle = innerGrad;
    ctx.fill();

    // Border
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.strokeStyle = isSelected ? "#fff" : color + "AA";
    ctx.lineWidth = isSelected ? 4 : 2;
    ctx.stroke();

    // Dashed ring for selected
    if (isSelected) {
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.85, 0, Math.PI * 2);
      ctx.strokeStyle = color + "55";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // Draw SVG icon async
    const img = new Image();
    const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const iconS = innerR * 1.15;
      ctx.drawImage(img, cx - iconS / 2, cy - iconS / 2, iconS, iconS);
      texture.needsUpdate = true;
      URL.revokeObjectURL(url);
    };
    img.src = url;
    return texture;
  };

  const createLabelCanvas = (name: string, color: string, isSelected: boolean): THREE.CanvasTexture => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 96;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, 512, 96);
    ctx.font = `${isSelected ? 700 : 400} 32px "Inter", "Segoe UI", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (isSelected) {
      const tw = ctx.measureText(name).width;
      const px = 18;
      const pillW = tw + px * 2;
      const pillH = 46;
      const pillX = 256 - pillW / 2;
      const pillY = 25;
      ctx.fillStyle = color + "25";
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 23);
      ctx.fill();
      ctx.strokeStyle = color + "44";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 23);
      ctx.stroke();
    }

    ctx.fillStyle = isSelected ? color : "#94A3B8";
    ctx.fillText(name, 256, 48);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  };

  // Rebuild node/label textures on selection change
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;
    categories.forEach((cat, i) => {
      const isSel = selected === cat.id;
      // Node texture
      const newTex = createIconTexture(cat.icon, cat.color, isSel, 256);
      const nMat = s.nodeSprites[i].material as THREE.SpriteMaterial;
      nMat.map?.dispose();
      nMat.map = newTex;
      nMat.needsUpdate = true;
      s.iconTextures[i] = newTex;
      // Label texture
      const newLabel = createLabelCanvas(cat.name, cat.color, isSel);
      const lMat = s.labelSprites[i].material as THREE.SpriteMaterial;
      lMat.map?.dispose();
      lMat.map = newLabel;
      lMat.needsUpdate = true;
    });
  }, [selected]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use ResizeObserver to get valid dimensions
    let renderer: THREE.WebGLRenderer | null = null;
    let disposed = false;

    const init = (width: number, height: number) => {
      if (disposed || renderer) return; // already init or cleaned up
      if (width < 10 || height < 10) return; // not ready

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.inset = "0";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
      camera.position.set(0, 0.3, 9);

      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const pl1 = new THREE.PointLight(0x10B981, 0.5, 20);
      pl1.position.set(5, 5, 5);
      scene.add(pl1);
      const pl2 = new THREE.PointLight(0x10B981, 0.3, 20);
      pl2.position.set(-5, -3, -5);
      scene.add(pl2);

      const group = new THREE.Group();
      group.position.y = 0.35; // shift graph upward to balance bottom space
      scene.add(group);

      // === Floating particle field (stars / dust) ===
      const particleCount = 300;
      const particleGeo = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleSizes = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
        particleSizes[i] = Math.random() * 2 + 0.5;
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      particleGeo.setAttribute("size", new THREE.BufferAttribute(particleSizes, 1));
      const starDotCanvas = document.createElement("canvas");
      starDotCanvas.width = 32;
      starDotCanvas.height = 32;
      const starCtx = starDotCanvas.getContext("2d")!;
      const starGrad = starCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      starGrad.addColorStop(0, "#ffffff");
      starGrad.addColorStop(0.3, "#10B98188");
      starGrad.addColorStop(1, "transparent");
      starCtx.fillStyle = starGrad;
      starCtx.fillRect(0, 0, 32, 32);
      const starTex = new THREE.CanvasTexture(starDotCanvas);
      const particleMat = new THREE.PointsMaterial({
        map: starTex,
        size: 0.08,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);

      // === Dual rotating wireframe globes ===
      const sphereGeo1 = new THREE.IcosahedronGeometry(3.8, 1);
      const sphereMat1 = new THREE.MeshBasicMaterial({
        color: 0x10B981,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });
      const sphere1 = new THREE.Mesh(sphereGeo1, sphereMat1);
      group.add(sphere1);

      // === Orbital ring ===
      const ringGeo = new THREE.TorusGeometry(4.8, 0.008, 8, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x10B981,
        transparent: true,
        opacity: 0.18,
      });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 2.3;
      ring1.rotation.z = 0.3;
      group.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(5.2, 0.006, 8, 128),
        new THREE.MeshBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.12 })
      );
      ring2.rotation.x = Math.PI / 1.6;
      ring2.rotation.z = -0.5;
      group.add(ring2);

      // === EDGES ===
      const edgeLines: THREE.Line[] = [];
      const pulses: THREE.Sprite[] = [];
      const pulses2: THREE.Sprite[] = []; // second wave of energy particles

      const pulseDotCanvas = document.createElement("canvas");
      pulseDotCanvas.width = 64;
      pulseDotCanvas.height = 64;
      const pCtx = pulseDotCanvas.getContext("2d")!;
      const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      pGrad.addColorStop(0, "#ffffff");
      pGrad.addColorStop(0.2, "#10B981");
      pGrad.addColorStop(0.5, "#10B98155");
      pGrad.addColorStop(1, "transparent");
      pCtx.fillStyle = pGrad;
      pCtx.fillRect(0, 0, 64, 64);
      const pulseTex = new THREE.CanvasTexture(pulseDotCanvas);

      for (const [i, j] of graphEdges) {
        const posA = nodePositions3D[i];
        const posB = nodePositions3D[j];
        // Curved edge via quadratic bezier with midpoint offset
        const mid = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
        const offset = new THREE.Vector3().subVectors(posB, posA).cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(0.3);
        mid.add(offset);
        const curve = new THREE.QuadraticBezierCurve3(posA, mid, posB);
        const curvePoints = curve.getPoints(24);
        const geo = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const mat = new THREE.LineBasicMaterial({
          color: 0x10B981,
          transparent: true,
          opacity: 0.45,
        });
        const line = new THREE.Line(geo, mat);
        group.add(line);
        edgeLines.push(line);
        // store curve data for animation
        (line as any)._curve = { posA, posB, offset: offset.clone() };

        // Pulse sprite 1
        const pm = new THREE.SpriteMaterial({
          map: pulseTex,
          transparent: true,
          opacity: 0.8,
          depthTest: false,
          blending: THREE.AdditiveBlending,
        });
        const pulse = new THREE.Sprite(pm);
        pulse.scale.set(0.22, 0.22, 1);
        group.add(pulse);
        pulses.push(pulse);

        // Pulse sprite 2 (offset wave)
        const pm2 = new THREE.SpriteMaterial({
          map: pulseTex,
          transparent: true,
          opacity: 0.5,
          depthTest: false,
          blending: THREE.AdditiveBlending,
        });
        const pulse2 = new THREE.Sprite(pm2);
        pulse2.scale.set(0.15, 0.15, 1);
        group.add(pulse2);
        pulses2.push(pulse2);
      }

      // === NODES ===
      const nodeSprites: THREE.Sprite[] = [];
      const labelSprites: THREE.Sprite[] = [];
      const iconTextures: (THREE.CanvasTexture | null)[] = [];

      for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        const pos = nodePositions3D[i];
        const isSel = selectedRef.current === cat.id;
        const nodeSize = 1.1 + cat.skills.length * 0.06;

        const tex = createIconTexture(cat.icon, cat.color, isSel, 256);
        iconTextures.push(tex);
        const mat = new THREE.SpriteMaterial({
          map: tex,
          transparent: true,
          depthTest: false,
          sizeAttenuation: true,
        });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(nodeSize, nodeSize, 1);
        sprite.position.copy(pos);
        (sprite as any)._catIndex = i;
        group.add(sprite);
        nodeSprites.push(sprite);

        const labelTex = createLabelCanvas(cat.name, cat.color, isSel);
        const labelMat = new THREE.SpriteMaterial({
          map: labelTex,
          transparent: true,
          depthTest: false,
          sizeAttenuation: true,
        });
        const label = new THREE.Sprite(labelMat);
        label.scale.set(2.8, 0.5, 1);
        label.position.set(pos.x, pos.y - nodeSize / 2 - 0.4, pos.z);
        group.add(label);
        labelSprites.push(label);
      }

      sceneRef.current = {
        renderer,
        scene,
        camera,
        group,
        nodeSprites,
        labelSprites,
        edgeLines,
        pulses,
        pulses2,
        iconTextures,
      };

      // === Interaction ===
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const handleClick = (e: MouseEvent) => {
        if (wasDragRef.current) return;
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(nodeSprites);
        if (hits.length > 0) {
          const idx = (hits[0].object as any)._catIndex;
          const catId = categories[idx].id;
          onSelect(selectedRef.current === catId ? null : catId);
        }
      };

      const handlePointerMove = (e: MouseEvent) => {
        if (isDraggingRef.current) return;
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(nodeSprites);
        container.style.cursor = hits.length > 0 ? "pointer" : "grab";
      };

      const handleMouseDown = (e: MouseEvent) => {
        isDraggingRef.current = true;
        prevMouseXRef.current = e.clientX;
        dragStartRef.current = { x: e.clientX, y: e.clientY };
        wasDragRef.current = false;
        container.style.cursor = "grabbing";
      };
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) {
          handlePointerMove(e);
          return;
        }
        const dx = e.clientX - prevMouseXRef.current;
        prevMouseXRef.current = e.clientX;
        group.rotation.y += dx * 0.005;
        if (Math.abs(e.clientX - dragStartRef.current.x) > 5 || Math.abs(e.clientY - dragStartRef.current.y) > 5) {
          wasDragRef.current = true;
        }
        autoRotateRef.current = false;
        if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
        autoTimerRef.current = setTimeout(() => { autoRotateRef.current = true; }, 2500);
      };
      const handleMouseUp = () => {
        isDraggingRef.current = false;
      };

      renderer.domElement.addEventListener("click", handleClick);
      renderer.domElement.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      // Touch
      const handleTouchStart = (e: TouchEvent) => {
        const tc = e.touches[0];
        isDraggingRef.current = true;
        prevMouseXRef.current = tc.clientX;
        dragStartRef.current = { x: tc.clientX, y: tc.clientY };
        wasDragRef.current = false;
      };
      const handleTouchMove = (e: TouchEvent) => {
        if (!isDraggingRef.current) return;
        const tc = e.touches[0];
        const dx = tc.clientX - prevMouseXRef.current;
        prevMouseXRef.current = tc.clientX;
        group.rotation.y += dx * 0.005;
        if (Math.abs(tc.clientX - dragStartRef.current.x) > 5) wasDragRef.current = true;
        autoRotateRef.current = false;
        if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
        autoTimerRef.current = setTimeout(() => { autoRotateRef.current = true; }, 2500);
      };
      const handleTouchEnd = (e: TouchEvent) => {
        isDraggingRef.current = false;
        if (!wasDragRef.current && e.changedTouches.length > 0) {
          const tc = e.changedTouches[0];
          const rect = container.getBoundingClientRect();
          mouse.x = ((tc.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((tc.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          const hits = raycaster.intersectObjects(nodeSprites);
          if (hits.length > 0) {
            const idx = (hits[0].object as any)._catIndex;
            const catId = categories[idx].id;
            onSelect(selectedRef.current === catId ? null : catId);
          }
        }
      };
      renderer.domElement.addEventListener("touchstart", handleTouchStart, { passive: true });
      renderer.domElement.addEventListener("touchmove", handleTouchMove, { passive: true });
      renderer.domElement.addEventListener("touchend", handleTouchEnd);

      // Animation
      const clock = new THREE.Clock();

      const animate = () => {
        if (disposed) return;
        animRef.current = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        const sel = selectedRef.current;

        if (autoRotateRef.current && !isDraggingRef.current) {
          group.rotation.y += 0.002;
        }

        // Rotate dual globes in counter-directions
        sphere1.rotation.y = t * 0.08;
        sphere1.rotation.x = Math.sin(t * 0.05) * 0.15;

        // Animate orbital rings
        ring1.rotation.z = 0.3 + t * 0.06;
        ring2.rotation.z = -0.5 - t * 0.04;

        // Animate particles (gentle drift)
        const pPos = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          pPos[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.0008;
          pPos[i * 3] += Math.cos(t * 0.2 + i * 0.5) * 0.0004;
        }
        particleGeo.attributes.position.needsUpdate = true;
        particleMat.opacity = 0.35 + Math.sin(t * 0.5) * 0.15;

        // Float nodes
        for (let i = 0; i < categories.length; i++) {
          const pos = nodePositions3D[i];
          const floatY = pos.y + Math.sin(t * 0.6 + i * 1.2) * 0.12;
          nodeSprites[i].position.y = floatY;
          const ns = 1.1 + categories[i].skills.length * 0.06;
          const isSel = sel === categories[i].id;
          const pulse = isSel ? ns * (1 + Math.sin(t * 3) * 0.08) : ns;
          nodeSprites[i].scale.set(pulse, pulse, 1);
          labelSprites[i].position.set(pos.x, floatY - ns / 2 - 0.4, pos.z);
        }

        // Edges — rebuild curves from current node positions
        for (let e = 0; e < graphEdges.length; e++) {
          const [i, j] = graphEdges[e];
          const isActive = sel === categories[i].id || sel === categories[j].id;
          const curveData = (edgeLines[e] as any)._curve;

          // Recalculate curve with floating positions
          const pA = nodeSprites[i].position.clone();
          const pB = nodeSprites[j].position.clone();
          const mid = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);
          mid.add(curveData.offset);
          const curve = new THREE.QuadraticBezierCurve3(pA, mid, pB);
          const newPoints = curve.getPoints(24);
          const geo = edgeLines[e].geometry as THREE.BufferGeometry;
          geo.setFromPoints(newPoints);
          geo.attributes.position.needsUpdate = true;

          const lMat = edgeLines[e].material as THREE.LineBasicMaterial;
          if (isActive) {
            const activeIdx = sel === categories[i].id ? i : j;
            lMat.color.set(categories[activeIdx].color);
            lMat.opacity = 0.7;
          } else {
            lMat.color.set(0x10B981);
            lMat.opacity = 0.25;
          }

          // Pulse dot 1
          const pt1 = ((t * 0.4 + e * 0.31) % 1);
          const p1Pos = curve.getPoint(pt1);
          pulses[e].position.copy(p1Pos);
          const pMat = pulses[e].material as THREE.SpriteMaterial;
          pMat.opacity = isActive ? 1.0 : 0.4;
          pulses[e].scale.setScalar(isActive ? 0.3 : 0.15);

          // Pulse dot 2 (offset)
          const pt2 = ((t * 0.4 + e * 0.31 + 0.5) % 1);
          const p2Pos = curve.getPoint(pt2);
          pulses2[e].position.copy(p2Pos);
          const pMat2 = pulses2[e].material as THREE.SpriteMaterial;
          pMat2.opacity = isActive ? 0.7 : 0.2;
          pulses2[e].scale.setScalar(isActive ? 0.2 : 0.1);
        }

        renderer!.render(scene, camera);
      };
      animate();

      // Store cleanup references
      (container as any).__threeCleanup = () => {
        renderer!.domElement.removeEventListener("click", handleClick);
        renderer!.domElement.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        renderer!.domElement.removeEventListener("touchstart", handleTouchStart);
        renderer!.domElement.removeEventListener("touchmove", handleTouchMove);
        renderer!.domElement.removeEventListener("touchend", handleTouchEnd);
      };
    };

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (!renderer) {
        init(width, height);
      } else {
        const s = sceneRef.current;
        if (s) {
          s.camera.aspect = width / height;
          s.camera.updateProjectionMatrix();
          s.renderer.setSize(width, height);
        }
      }
    });
    ro.observe(container);

    return () => {
      disposed = true;
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      if ((container as any).__threeCleanup) {
        (container as any).__threeCleanup();
      }
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      sceneRef.current = null;
    };
  }, [onSelect]);

  return <div ref={containerRef} className="w-full h-full relative" />;
}

export function Skills() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  const selectedCat = categories.find((c) => c.id === selected);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return (
    <AnimatedSection id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-8 rounded-full" style={{ background: "#10B981" }} />
          <h2 className="text-3xl" style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}>
            SKILLS & EXPERTISE
          </h2>
        </div>
        {isDesktop && (
          <p className="mb-12 ml-4 text-sm" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
            Click on any node to explore · Drag to rotate the graph
          </p>
        )}

        {isDesktop ? (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div
                className="relative w-full rounded-xl overflow-hidden"
                style={{
                  height: "min(520px, 65vh)",
                  background: "rgba(13,13,26,0.6)",
                  border: "1px solid rgba(16,185,129,0.12)",
                }}
              >
                <ThreeGraph selected={selected} onSelect={setSelected} />
                {/* Legend dots */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelected(selected === cat.id ? null : cat.id)}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] cursor-pointer transition-all"
                      style={{
                        background: selected === cat.id ? cat.color + "22" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${selected === cat.id ? cat.color + "55" : "rgba(255,255,255,0.06)"}`,
                        color: selected === cat.id ? cat.color : "#64748B",
                        fontFamily: "Inter",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center">
              <AnimatePresence mode="wait">
                {selectedCat ? (
                  <motion.div
                    key={selectedCat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-xl p-6"
                    style={{
                      background: "rgba(30,30,46,0.7)",
                      border: `1px solid ${selectedCat.color}33`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ background: selectedCat.color }} />
                        <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: selectedCat.color }}>
                          {selectedCat.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <X size={16} style={{ color: "#94A3B8" }} />
                      </button>
                    </div>
                    <p className="text-sm mb-5" style={{ color: "#94A3B8", fontFamily: "Inter", lineHeight: 1.7 }}>
                      {selectedCat.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedCat.skills.map((s, si) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: si * 0.05 }}
                          className="px-3 py-1.5 rounded-lg text-xs"
                          style={{
                            background: `${selectedCat.color}15`,
                            color: selectedCat.color,
                            border: `1px solid ${selectedCat.color}22`,
                            fontFamily: "Inter",
                            fontWeight: 500,
                          }}
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full text-center py-16 rounded-xl"
                    style={{
                      background: "rgba(30,30,46,0.3)",
                      border: "1px dashed rgba(16,185,129,0.2)",
                    }}
                  >
                    <p className="text-sm" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
                      ← Select a skill node to explore
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(30,30,46,0.7)",
                  border: "1px solid rgba(16,185,129,0.16)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <h3 style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}>
                    {cat.name}
                  </h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "#94A3B8", fontFamily: "Inter", lineHeight: 1.7 }}>
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-lg text-xs"
                      style={{
                        background: `${cat.color}12`,
                        color: cat.color,
                        border: `1px solid ${cat.color}22`,
                        fontFamily: "Inter",
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mt-16">
          {softSkills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(16,185,129,0.06)",
                color: "#94A3B8",
                border: "1px solid rgba(16,185,129,0.12)",
                fontFamily: "Inter",
              }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}