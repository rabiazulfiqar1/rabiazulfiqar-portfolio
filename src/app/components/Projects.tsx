import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const ACCENT = "#10B981";

const projects = [
  {
    name: "SparkSpace",
    subtitle: "Multimodal AI Study Platform",
    repoUrl: "https://github.com/rabiazulfiqar1/SparkSpace",
    stack: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    bullets: [
      "40% faster queries with optimized architecture",
      "RAG-based AI assistant achieving 85% accuracy",
      "Multimodal content processing pipeline",
    ],
  },
  {
    name: "IntelliLearn",
    subtitle: "Personalized Learning Platform",
    repoUrl: "https://github.com/rabiazulfiqar1/IntelliLearn",
    stack: ["Python", "Supabase", "pgVector", "FastAPI"],
    bullets: [
      "ETL pipelines processing 500+ files",
      "pgVector-powered recommendation system",
      "Adaptive learning path generation",
    ],
  },
  {
    name: "Analytics Dashboard",
    subtitle: "Interactive Data Analytics",
    repoUrl: "https://github.com/rabiazulfiqar1/Exoplanets-Analysis",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "SQL"],
    bullets: [
      "5,000+ record exploratory data analysis",
      "IQR/Z-score automated data cleaning",
      "Spearman correlation insights visualization",
    ],
  },
  {
    name: "Nova Pulse",
    subtitle: "AI Project Copilot for CS Students",
    repoUrl: "https://github.com/rabiazulfiqar1/dev-pilot",
    stack: ["Next.js", "FastAPI", "AWS", "WebSockets", "Python"],
    bullets: [
      "End-to-end idea → execution → interview prep workflow",
      "Real-time voice coaching via Amazon Nova Sonic",
      "Automated GitHub repo scaffolding with OAuth",
    ],
  },
];

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cardsPerView;
}

export function Projects() {
  const cardsPerView = useCardsPerView();
  const maxIndex = Math.max(0, projects.length - cardsPerView);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);

  // Clamp index when cards per view changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;
  const showNavigation = projects.length > cardsPerView;

  // Touch/drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragDelta.current = 0;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragDelta.current = clientX - dragStartX.current;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragDelta.current > threshold) prev();
    else if (dragDelta.current < -threshold) next();
    dragDelta.current = 0;
  };

  // Card gap in px (matches gap-6 = 24px)
  const GAP = 24;

  // Calculate translate: each card is (100% / cardsPerView) wide,
  // we shift by currentIndex cards worth
  const translatePercent = -(currentIndex * (100 / cardsPerView));
  // Also account for the gap: shift by currentIndex * GAP px
  const translateGapPx = -(currentIndex * GAP * ((cardsPerView - 1) / cardsPerView));

  return (
    <AnimatedSection id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header with navigation arrows */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full" style={{ background: ACCENT }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}
            >
              PROJECTS
            </h2>
          </div>

          {/* Desktop arrow navigation */}
          {showNavigation && (
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={prev}
                disabled={!canGoPrev}
                aria-label="Previous projects"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: canGoPrev ? "rgba(16,185,129,0.12)" : "rgba(30,30,46,0.4)",
                  border: `1px solid ${canGoPrev ? "rgba(16,185,129,0.3)" : "rgba(148,163,184,0.1)"}`,
                  color: canGoPrev ? ACCENT : "#475569",
                  cursor: canGoPrev ? "pointer" : "not-allowed",
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                disabled={!canGoNext}
                aria-label="Next projects"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: canGoNext ? "rgba(16,185,129,0.12)" : "rgba(30,30,46,0.4)",
                  border: `1px solid ${canGoNext ? "rgba(16,185,129,0.3)" : "rgba(148,163,184,0.1)"}`,
                  color: canGoNext ? ACCENT : "#475569",
                  cursor: canGoNext ? "pointer" : "not-allowed",
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel container */}
        <div
          className="overflow-hidden"
          style={{ margin: "0 -2px", padding: "0 2px" }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(${translatePercent}% + ${translateGapPx}px))`,
              transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: showNavigation ? "grab" : "default",
            }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-xl p-6 group flex flex-col"
                style={{
                  background: "rgba(30,30,46,0.6)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  minWidth: `calc((100% - ${GAP * (cardsPerView - 1)}px) / ${cardsPerView})`,
                  maxWidth: `calc((100% - ${GAP * (cardsPerView - 1)}px) / ${cardsPerView})`,
                  flex: "0 0 auto",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  userSelect: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(16,185,129,0.08)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: ACCENT, fontFamily: "Inter" }}>
                  {p.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        color: ACCENT,
                        fontFamily: "Inter",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4 flex-grow">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm flex gap-2"
                      style={{ color: "#94A3B8", fontFamily: "Inter" }}
                    >
                      <span style={{ color: ACCENT }}>▹</span> {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors mt-auto"
                  style={{ color: ACCENT, fontFamily: "Inter" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#34D399")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = ACCENT)}
                >
                  <ExternalLink size={14} /> View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        {showNavigation && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: currentIndex === i ? "24px" : "8px",
                  height: "8px",
                  background: currentIndex === i ? ACCENT : "rgba(148,163,184,0.3)",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}

        {/* Mobile arrow navigation */}
        {showNavigation && (
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              aria-label="Previous projects"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: canGoPrev ? "rgba(16,185,129,0.12)" : "rgba(30,30,46,0.4)",
                border: `1px solid ${canGoPrev ? "rgba(16,185,129,0.3)" : "rgba(148,163,184,0.1)"}`,
                color: canGoPrev ? ACCENT : "#475569",
                cursor: canGoPrev ? "pointer" : "not-allowed",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={!canGoNext}
              aria-label="Next projects"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: canGoNext ? "rgba(16,185,129,0.12)" : "rgba(30,30,46,0.4)",
                border: `1px solid ${canGoNext ? "rgba(16,185,129,0.3)" : "rgba(148,163,184,0.1)"}`,
                color: canGoNext ? ACCENT : "#475569",
                cursor: canGoNext ? "pointer" : "not-allowed",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}