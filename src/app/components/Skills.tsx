export default function Skills() {
    return (
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
    );
}

