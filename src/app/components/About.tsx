import { AnimatedSection } from "./AnimatedSection";
import { motion } from "motion/react";
import { GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { techIconMap } from "./TechIcons";

const achievements = [
  { icon: Trophy, label: "3.91/4.0 CGPA", desc: "Dean's List" },
  { icon: Lightbulb, label: "3+ Projects", desc: "Full-Stack & AI" },
  { icon: GraduationCap, label: "2+ Roles", desc: "Research & Leadership" },
];

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "Streamlit", "Tailwind CSS", "RESTful APIs"],
  },
  {
    title: "DATA & AI",
    skills: ["Pandas", "Plotly", "Scipy", "PyTorch", "Scikit-learn", "pgVector", "ETL Pipelines", "RAG", "CrewAI", "Google ADK"],
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    title: "TOOLS & INFRA",
    skills: ["Docker", "Git", "GitHub", "Linux", "WebSockets", "AWS", "Azure"],
  },
];

export function About() {
  return (
    <AnimatedSection id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div
            className="w-1 h-8 rounded-full"
            style={{ background: "#10B981" }}
          />
          <h2
            className="text-3xl"
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              color: "#F1F5F9",
            }}
          >
            ABOUT ME
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Bio + Education */}
          <div>
            <h3
              className="text-xl mb-4"
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 600,
                color: "#F1F5F9",
              }}
            >
              Who I Am
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: "Inter",
                color: "#94A3B8",
                lineHeight: 1.8,
              }}
            >
              Hey there! I'm Rabia, a{" "}
              <span style={{ color: "#F1F5F9", fontWeight: 500 }}>
                Computer Science student
              </span>{" "}
              passionate about building intelligent systems. I research
              lightweight AI architectures in Computer Vision, build full-stack
              applications, and lead the NLP Division at ACM AI Society.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg p-3 text-center"
                  style={{
                    background: "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.15)",
                  }}
                >
                  <a.icon
                    size={20}
                    className="mx-auto mb-2"
                    style={{ color: "#10B981" }}
                  />
                  <div
                    className="text-sm"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontWeight: 600,
                      color: "#F1F5F9",
                    }}
                  >
                    {a.label}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "#94A3B8", fontFamily: "Inter" }}
                  >
                    {a.desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <h3
              className="text-xl mb-4"
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 600,
                color: "#F1F5F9",
              }}
            >
              Education
            </h3>
            <div
              className="rounded-xl p-4 flex items-start gap-4"
              style={{
                background: "rgba(30,30,46,0.6)",
                border: "1px solid rgba(16,185,129,0.12)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(16,185,129,0.15)",
                }}
              >
                <GraduationCap size={22} style={{ color: "#10B981" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 600,
                    color: "#F1F5F9",
                  }}
                >
                  FAST National University
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#94A3B8", fontFamily: "Inter" }}
                >
                  Bachelor's in Computer Science
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ color: "#10B981", fontFamily: "Inter" }}
                >
                  2023 – 2027 · CGPA: 3.91/4.0
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div>
            <h3
              className="text-xl mb-6"
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 600,
                color: "#F1F5F9",
              }}
            >
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((cat, ci) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 }}
                >
                  <div
                    className="text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
                    style={{
                      color: "#10B981",
                      fontFamily: "Inter",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{ background: "#10B981" }}
                    />
                    {cat.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => {
                      const IconComp = techIconMap[s];
                      return (
                        <span
                          key={s}
                          className="px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105 cursor-default flex items-center gap-1.5"
                          style={{
                            background: "rgba(30,30,46,0.8)",
                            color: "#F1F5F9",
                            border: "1px solid rgba(16,185,129,0.15)",
                            fontFamily: "Inter",
                            fontWeight: 500,
                          }}
                        >
                          {IconComp && <IconComp size={14} />}
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}