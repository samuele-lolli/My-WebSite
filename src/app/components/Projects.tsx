import Image from 'next/image';

type Project = {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    stargazers_count: number;
};

const favoriteProjectNames: string[] = ["Finetuning-Pegasus-Model", "MilkyWay", "Data-Analytics-Techniques", "Satellite-Image-Inpainting", "Steam-Recommendation-System", "My-Website"];

async function fetchFavoriteProjects(): Promise<Project[]> {
    const response: Response = await fetch("https://api.github.com/users/samuele-lolli/repos", {
        next: { revalidate: 6000}, // ISR
    });
    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const projects: Project[] = await response.json();

    const favoriteProjects = projects.filter(project => 
        favoriteProjectNames.includes(project.name)
    );

    return favoriteProjects;
}

export default async function Projects() {
    const projects: Project[] = await fetchFavoriteProjects();
    return (
        <section id="projects" className="min-h-screen py-16 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#52b788] drop-shadow-md text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#52b788] p-6 rounded-lg hover:scale-105 hover:border-[#cccccc] transition duration-300 shadow-md flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#52b788] to-[#cccccc] opacity-20 blur"></div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#52b788] mb-2 text-center z-10">
                            {project.name}
                        </h3>
                        <p className="text-[#cccccc] mb-4 text-sm text-center flex-grow z-10">
                            {project.description || "No description available."}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center z-10">
                            {project.topics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="bg-[#0d0d0d] text-[#cccccc] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#52b788] hover:text-white transition duration-300"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center z-10">
                            <a
                                href={project.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-1 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 mt-2 text-sm"
                            >
                                <Image
                                    src="/github.svg"
                                    alt="GitHub"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                />
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
