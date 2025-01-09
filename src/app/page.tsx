import React, { ReactNode } from "react";

type Project = {
  topics: String[];
  stargazers_count: ReactNode;
  id: number;
  name: string;
  description: string;
  html_url: string;
};

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("https://api.github.com/users/samuele-lolli/repos");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main className="bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#1b263b] bg-opacity-90 fixed w-full z-10 shadow-md">
        <button className="text-[#e63946] text-xl font-bold hover:text-[#a8dadc] transition duration-300">
          Home
        </button>
        <div className="flex space-x-6">
          <a href="#skills" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
            Skills
          </a>
          <a href="#projects" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
            Projects
          </a>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#1b263b] to-[#415a77] px-6">
        <div className="relative">
          <img
            src="/me.png"
            alt="Samuele Lolli"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-[#e63946] drop-shadow-md">
          Hello, I’m Samuele Lolli
        </h1>
        <p className="text-xl sm:text-2xl text-[#a8dadc] mb-6 leading-relaxed">
          I am currently studying Computer Science at University of Bologna. Passionate about AI with a strong
          foundation in programming and problem-solving.
        </p>

        {/* Bottoni */}
        <div className="flex space-x-6">
          <a
            href="/CV.pdf"
            download
            className="px-6 py-3 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#a8dadc] hover:text-[#1b263b] transition duration-300 shadow-md"
          >
            Download CV
          </a>
          <a
            href="https://github.com/samuele-lolli"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#e63946] text-white font-semibold rounded-lg hover:bg-[#a8dadc] hover:text-[#1b263b] transition duration-300 shadow-md"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-[#1b263b] bg-opacity-90 text-center text-[#a8dadc]">
        <h2 className="text-4xl font-bold mb-6 text-[#e63946] drop-shadow-md">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: "Pytorch", logo: "pytorch.svg" },
            { name: "ScikitLearn", logo: "scikitlearn.svg" },
            { name: "Pandas", logo: "pandas.svg" },
            { name: "Flask", logo: "flask.svg" },
            { name: "React", logo: "react.svg" },
            { name: "Node", logo: "node.svg" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="relative bg-gradient-to-br from-[#415a77] to-[#1b263b] border border-[#e63946] p-4 rounded-lg hover:scale-105 hover:border-[#a8dadc] transition duration-300 shadow-md flex flex-col items-center"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#e63946] to-[#a8dadc] opacity-20 blur"></div>
              <img src={skill.logo} alt={`${skill.name} logo`} className="h-16 mb-2 z-10" />
              <span className="text-lg font-semibold z-10">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#415a77] to-[#0d1b2a] mb-0">
  <h2 className="text-4xl font-bold mb-6 text-[#e63946] drop-shadow-md text-center">
    Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <div
        key={project.id}
        className="relative bg-gradient-to-br from-[#1b263b] via-[#415a77] to-[#0d1b2a] border border-[#e63946] p-6 rounded-lg hover:scale-105 hover:border-[#a8dadc] transition duration-300 shadow-xl flex flex-col justify-between"
      >
        {/* Title */}
        <h3 className="text-2xl font-bold text-[#e63946] mb-2 text-center">
          {project.name || "Unnamed Project"}
        </h3>

        {/* Description */}
        <p className="text-[#a8dadc] mb-4 text-sm text-center flex-grow">
          {project.description || "No description available."}
        </p>

        {/* Topics - Tag */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.topics.map((topic, index) => (
            <span
              key={index}
              className="bg-[#a8dadc] text-[#1b263b] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#e63946] hover:text-white transition duration-300"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* GitHub Button with Logo */}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 bg-[#a8dadc] text-[#1b263b] font-semibold rounded-lg hover:bg-[#e63946] hover:text-white transition duration-300 text-center max-w-xs mx-auto"
        >
          <img
            src="github.svg"
            alt="GitHub"
            className="h-5 mr-2"
          />
          View on GitHub
        </a>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#1b263b] bg-opacity-90 text-center text-[#a8dadc]">
        <h2 className="text-4xl font-bold mb-6 text-[#e63946] drop-shadow-md">Contact</h2>
        <p className="text-lg mb-8">
          Feel free to reach out to me through the links below. Let’s connect and discuss exciting opportunities!
        </p>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/samuele-lolli/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src="linkedin.svg" alt="LinkedIn" className="h-16 transition-transform hover:rotate-12" />
            </a>
            <p className="mt-2 text-sm">LinkedIn</p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/samuele-lolli"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src="github2.svg" alt="GitHub" className="h-16 transition-transform hover:rotate-12" />
            </a>
            <p className="mt-2 text-sm">GitHub</p>
          </div>
          <div className="text-center">
            <a
              href="mailto:your-email@example.com?subject=Let's%20connect&body=Hi%20there!"
              className="transform hover:scale-110 transition duration-300"
            >
              <img src="email.svg" alt="Email" className="h-16 transition-transform hover:rotate-12" />
            </a>
            <p className="mt-2 text-sm">Email</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#1b263b] bg-opacity-90 text-center shadow-inner">
        <p className="text-[#a8dadc]">
          &copy; {new Date().getFullYear()} Samuele Lolli. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
