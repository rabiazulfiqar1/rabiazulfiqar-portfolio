import { AnimatedSection } from "./AnimatedSection";

const resumePath = "/resume.pdf";

export function Resume() {
  const pdfUrl = resumePath;

  // Detect mobile (rough check — good enough for this use case)
  const isMobile = typeof window !== "undefined" &&
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Google Docs viewer works on all browsers including mobile Safari
  const googleDocsUrl = `https://docs.google.com/gview?url=${
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.origin + pdfUrl)
      : ""
  }&embedded=true`;

  const handleDownload = () => {
    if (!pdfUrl) return;
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "Rabia_Zulfiqar_Resume.pdf";
    a.click();
  };

  return (
    <AnimatedSection id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 rounded-full" style={{ background: "#10B981" }} />
            <h2
              className="text-3xl"
              style={{ fontFamily: "Space Grotesk", fontWeight: 700, color: "#F1F5F9" }}
            >
              RESUME
            </h2>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all cursor-pointer hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #10B981, #059669)",
              color: "#F1F5F9",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              border: "1px solid rgba(16,185,129,0.4)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* ═══ PDF VIEWER CONTAINER ═══ */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#1E1E1E",
            border: "1px solid rgba(16,185,129,0.18)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Mobile: Google Docs viewer iframe */}
          {isMobile ? (
            <iframe
              src={googleDocsUrl}
              title="Rabia Zulfiqar Resume"
              width="100%"
              style={{ height: "78vh", border: "none", display: "block" }}
            />
          ) : (
            /* Desktop: native object embed */
            <object
              data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              type="application/pdf"
              width="100%"
              style={{ height: "78vh", display: "block" }}
            >
              <embed
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                type="application/pdf"
                width="100%"
                style={{ height: "78vh", display: "block" }}
              />
            </object>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}