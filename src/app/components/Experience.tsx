import { motion } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";

const entries = [
  {
    title: "Research Assistant – Computer Vision",
    org: "FAST National University",
    date: "Feb 2026 – Present",
    desc: "Investigating lightweight AI architectures & optimization for on-device image processing",
  },
  {
    title: "Team Lead – NLP Division",
    org: "ACM AI Society, FAST University",
    date: "2025 – Present",
    desc: "Led AI seminars, managed cross-functional teams & event timelines",
  },
];

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 rounded-full" style={{ background: "#10B981" }} />
          <h2 className="text-3xl" style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}>
            EXPERIENCE
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
            style={{ background: "rgba(16,185,129,0.2)" }}
          />

          {entries.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-14 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute top-3 left-3.5 md:left-auto w-3 h-3 rounded-full"
                style={{
                  background: "#10B981",
                  boxShadow: "0 0 12px rgba(16,185,129,0.5)",
                  ...(i % 2 === 0
                    ? { right: "-6.5px", left: "auto" }
                    : { left: "-6.5px" }),
                }}
              />
              {/* Mobile dot */}
              <div
                className="absolute top-3 left-3.5 w-3 h-3 rounded-full md:hidden"
                style={{
                  background: "#10B981",
                  boxShadow: "0 0 12px rgba(16,185,129,0.5)",
                }}
              />

              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(30,30,46,0.6)",
                  border: "1px solid rgba(16,185,129,0.12)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    color: "#F1F5F9",
                  }}
                >
                  {e.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: "#10B981", fontFamily: "Inter" }}>
                  {e.org}
                </p>
                <p className="text-xs mt-1 mb-3" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
                  {e.date}
                </p>
                <p className="text-sm" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
                  {e.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}