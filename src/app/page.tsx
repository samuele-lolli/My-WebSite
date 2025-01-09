import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Hero from "./components/Hero";

export default async function Home() {
  return (
    <main className="bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] text-white font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
