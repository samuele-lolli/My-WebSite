import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-[#ffffff] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
