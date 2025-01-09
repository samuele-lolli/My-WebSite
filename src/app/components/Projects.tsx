type Project = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    stargazers_count: number;
  };
  
  
  async function fetchProjects(): Promise<Project[]> {
    const response: Response = await fetch("https://api.github.com/users/samuele-lolli/repos", {
      next: { revalidate: 60 }, // ISR
    });
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const projects: Project[] = await response.json(); 
    return projects;
  }
  

export default async function Projects() {
    const projects: Project[] = await fetchProjects();
    return (
        <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#415a77] to-[#0d1b2a] mb-0">
            <h2 className="text-4xl font-bold mb-6 text-[#e63946] drop-shadow-md text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-gradient-to-br from-[#415a77] to-[#1b263b] border border-[#e63946] p-6 rounded-lg hover:scale-105 hover:border-[#a8dadc] transition duration-300 shadow-md flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#e63946] to-[#a8dadc] opacity-20 blur"></div>
                        <h3 className="text-2xl font-bold text-[#e63946] mb-2 text-center z-10">
                            {project.name}
                        </h3>
                        <p className="text-[#a8dadc] mb-4 text-sm text-center flex-grow z-10">
                            {project.description || "No description available."}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center z-10">
                            {project.topics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="bg-[#a8dadc] text-[#1b263b] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#e63946] hover:text-white transition duration-300"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-[#a8dadc] text-[#1b263b] font-semibold rounded-lg hover:bg-[#e63946] hover:text-white transition duration-300 text-center max-w-xs mx-auto z-10"
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
    );
}
