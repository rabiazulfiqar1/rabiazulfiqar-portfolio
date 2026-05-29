Design a modern, animated, responsive personal portfolio website for Rabia Zulfiqar, a 3rd-year Computer Science undergraduate at FAST National University (CGPA: 3.91/4.0), specializing in AI, full-stack development, and data analytics. 

---

DESIGN PHILOSOPHY
- Aesthetic: Clean dark theme with subtle depth — think deep navy/charcoal (#0D0D1A base) with soft glowing accents in electric violet (#7C3AED) and cyan (#06B6D4)
- Layout: Single-page scroll with clearly separated sections — simple to navigate, never cluttered
- Animations: Smooth, purposeful — entrance fade-ins, hover glows, floating particles in the background (subtle, like constellations). NOT flashy, just alive
- Typography: Modern sans-serif — use Inter or Space Grotesk for body, a slightly heavier weight for headings
- Vibe: Brilliant CS student meets AI researcher — confident, minimal, technically impressive

---

NAVIGATION
- Fixed top navbar: Logo (initials "RZ" in a glowing badge) + section links: About, Projects, Experience, Skills, Contact
- Smooth scroll between sections
- Navbar collapses gracefully on mobile

---

SECTION 1 — HERO
- Full viewport height
- Animated background: subtle floating node-and-edge graph (like a neural network) drifting slowly — nodes glow softly in violet/cyan
- Large centered heading: "Hi, I'm Rabia Zulfiqar"
- Subtitle with typewriter animation cycling through: "AI Researcher · Full-Stack Developer · Data Analyst · CS @ FAST NU"
- Two CTA buttons: "View My Work" (primary, filled) and "Download Resume" (outlined)
- Floating particle/node elements that react slightly to mouse movement (parallax)

---

SECTION 2 — ABOUT
- Two-column layout: left is a stylized avatar placeholder (geometric illustration or glowing abstract portrait frame), right is text
- Short bio: "I'm a Computer Science student at FAST National University with a 3.91 GPA, currently researching lightweight AI architectures in Computer Vision. I build full-stack applications, AI-powered tools, and data pipelines — and I lead the NLP Division at ACM AI Society."
- 3 highlight stats in glowing cards: "3.91 GPA", "3+ Full-Stack Projects", "2+ Research & Leadership Roles"

---

SECTION 3 — SKILLS (Neural Network Graph Visualization)
This is the signature section. Design it as an interactive node graph inspired by a neural network:
- Nodes represent skill categories: Data Analytics, Databases, Programming, Backend & APIs, Frontend, IT & Systems
- Edges/lines connect related skills
- Each node when hovered expands to show the specific skills inside it (e.g., "Data Analytics" → SQL, Pandas, Plotly, Scipy, Statistical Analysis, ETL Pipelines)
- Node sizes vary by number of skills (larger = more skills)
- Color-code by category: violet for AI/ML, cyan for Backend, amber for Frontend, etc.
- Animate nodes with a gentle pulse when idle
- Below or alongside: soft skill tags displayed as pill badges (Team Leadership, Project Management, Communication, Problem-Solving, Documentation)

---

SECTION 4 — PROJECTS
- Card grid (2 columns on desktop, 1 on mobile)
- Each card has: project name, tech stack badges, 2–3 bullet highlights, and a subtle hover animation (card lifts + glow border appears)
- Include these 3 projects:
  1. SparkSpace — Multimodal AI Study Platform (FastAPI, React, PostgreSQL, Redis, Docker) — "40% faster queries, RAG-based AI assistant at 85% accuracy"
  2. IntelliLearn — Personalized Learning Platform (Python, Supabase, pgVector, FastAPI) — "ETL pipelines for 500+ files, pgVector recommendation system"
  3. Interactive Data Analytics Dashboard (Python, Streamlit, Pandas, Plotly, SQL) — "5,000+ record EDA, IQR/Z-score data cleaning, Spearman correlation insights"
- "View on GitHub" link on each card

---

SECTION 5 — EXPERIENCE (Timeline Style — like rian.corcino.net)
- Vertical timeline with alternating left/right layout on desktop
- Each entry animates in as you scroll (slide-in from side)
- Two entries:
  1. Research Assistant – Computer Vision | FAST National University | Feb 2026 – Present
     "Investigating lightweight AI architectures & optimization for on-device image processing"
  2. Team Lead – NLP Division | ACM AI Society, FAST University | 2025 – Present
     "Led AI seminars, managed cross-functional teams & event timelines"
- Glowing dot on the timeline line for each entry



---

SECTION 7 — CONTACT
- Clean centered layout
- Heading: "Let's Build Something Together"
- Email button: rzulfiqar889@gmail.com (copy-to-clipboard on click with a toast notification)
- Icon links: LinkedIn, GitHub (rabiazulfiqar1)


---

FOOTER
- Minimal: "© 2025 Rabia Zulfiqar · Designed with purpose"
- Back to top button

---

RESPONSIVENESS
- Fully responsive: desktop, tablet, mobile
- Neural network skill graph simplifies to a categorized list with expandable accordion on mobile

---

INTERACTIONS & ANIMATIONS TO INCLUDE
- Scroll-triggered fade/slide-in for every section (Intersection Observer style)
- Cursor glow trail (subtle, violet)
- Hero nodes react to mouse movement (parallax)
- Project cards lift on hover
- Timeline entries animate in from sides on scroll
- Typewriter text loop in hero
- Skill nodes pulse gently + expand on hover

---

COLOR PALETTE
- Background: #0D0D1A (deep navy black)
- Primary Accent: #7C3AED (electric violet)
- Secondary Accent: #06B6D4 (cyan)
- Text Primary: #F1F5F9 (off-white)
- Text Secondary: #94A3B8 (muted slate)
- Card Background: #1E1E2E (slightly lighter dark)
- Border/Glow: rgba(124, 58, 237, 0.4)

---

FONT STACK
- Headings: Space Grotesk, 700 weight
- Body: Inter, 400/500 weight
- Code snippets (optional): Fira Code

---

Generate a complete, polished, production-ready Figma design with all components, auto-layout frames, and organized layers labeled by section.