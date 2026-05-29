import { AnimatedSection } from "./AnimatedSection";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rzulfiqar889@gmail.com");
    toast.success("Email copied to clipboard!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatedSection id="contact" className="py-24 px-6">
      <Toaster theme="dark" />
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-1 h-8 rounded-full" style={{ background: "#10B981" }} />
          <h2 className="text-3xl" style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}>
            CONTACT
          </h2>
        </div>
        <p className="text-xl mb-2" style={{ fontFamily: "Space Grotesk", fontWeight: 600, color: "#F1F5F9" }}>
          Let's Build Something Together
        </p>
        <p className="mb-10 text-sm" style={{ color: "#94A3B8", fontFamily: "Inter" }}>
          I'm always open to new opportunities and collaborations.
        </p>
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl mb-8 transition-all duration-200 hover:scale-105"
          style={{
            background: "rgba(30,30,46,0.6)",
            border: "1px solid rgba(16,185,129,0.2)",
            color: "#F1F5F9",
            fontFamily: "Inter",
          }}
        >
          <Mail size={18} style={{ color: "#10B981" }} />
          rzulfiqar889@gmail.com
          {copied ? (
            <Check size={16} style={{ color: "#10B981" }} />
          ) : (
            <Copy size={16} style={{ color: "#94A3B8" }} />
          )}
        </button>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/rabia-zulfiqar05/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(30,30,46,0.6)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <Linkedin size={20} style={{ color: "#10B981" }} />
          </a>
          <a
            href="https://github.com/rabiazulfiqar1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(30,30,46,0.6)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <Github size={20} style={{ color: "#10B981" }} />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}