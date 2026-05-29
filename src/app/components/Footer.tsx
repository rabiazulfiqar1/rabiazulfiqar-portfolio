import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 flex items-center justify-between" style={{ borderTop: "1px solid rgba(16,185,129,0.15)" }}>
      <p className="text-sm" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
        © 2026 Rabia Zulfiqar · Designed with purpose
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
        style={{ background: "rgba(16,185,129,0.2)", border: "1px solid rgba(16,185,129,0.3)" }}
      >
        <ArrowUp size={18} style={{ color: "#10B981" }} />
      </button>
    </footer>
  );
}