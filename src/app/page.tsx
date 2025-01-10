import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-[#ffffff] font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
