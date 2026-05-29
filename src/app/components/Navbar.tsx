import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = ["About", "Skills", "Projects", "Experience", "Resume", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scroll = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,13,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(16,185,129,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
        {/* Left: Name */}
        <button
          onClick={() => scroll("hero")}
          className="flex items-center gap-2 transition-all hover:opacity-80 cursor-pointer"
        >
          <img
            src="/favicon.svg"
            alt="RZ logo"
            className="w-9 h-9"
          />
          <span style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9", fontSize: 16, letterSpacing: "0.05em" }}>
            RABIA ZULFIQAR
          </span>
        </button>

        {/* Center: Links */}
        <div
          className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full"
          style={{
            background: "rgba(30,30,46,0.6)",
            border: "1px solid rgba(16,185,129,0.15)",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="px-4 py-1.5 rounded-full text-sm transition-all duration-200 hover:bg-[rgba(16,185,129,0.15)] cursor-pointer"
              style={{ color: "#94A3B8", fontFamily: "Inter" }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Right: Social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/rabia-zulfiqar05/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[rgba(16,185,129,0.15)]"
          >
            <Linkedin size={18} style={{ color: "#F1F5F9" }} />
          </a>
          <a
            href="https://github.com/rabiazulfiqar1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[rgba(16,185,129,0.15)]"
          >
            <Github size={18} style={{ color: "#F1F5F9" }} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          style={{ color: "#F1F5F9" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-6 pb-5 flex flex-col gap-1"
            style={{ background: "rgba(13,13,26,0.97)" }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scroll(l)}
                className="text-left text-sm py-2.5 px-3 rounded-lg transition-colors hover:bg-[rgba(16,185,129,0.1)]"
                style={{ color: "#94A3B8", fontFamily: "Inter" }}
              >
                {l}
              </button>
            ))}
            <div className="flex gap-3 mt-3 px-3">
              <a href="https://www.linkedin.com/in/rabia-zulfiqar05/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} style={{ color: "#F1F5F9" }} />
              </a>
              <a href="https://github.com/rabiazulfiqar1" target="_blank" rel="noopener noreferrer">
                <Github size={20} style={{ color: "#F1F5F9" }} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}