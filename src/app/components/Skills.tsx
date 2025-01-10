export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6 bg-[#1a1a1a] bg-opacity-90 text-center text-[#cccccc]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#52b788] drop-shadow-md">Skills</h2>
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
                        className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#52b788] p-4 rounded-lg hover:scale-105 hover:border-[#cccccc] transition duration-300 shadow-md flex flex-col items-center"
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#52b788] to-[#cccccc] opacity-20 blur"></div>
                        <img src={skill.logo} alt={`${skill.name} logo`} className="h-12 sm:h-16 mb-2 z-10" />
                        <span className="text-base sm:text-lg font-semibold z-10">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

