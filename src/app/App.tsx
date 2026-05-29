import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";

export default function App() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "#0D0D1A", fontFamily: "Inter, sans-serif" }}
    >
      <Background />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
