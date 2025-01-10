export default function Certifications() {
    const certifications = [
        {
            title: "Blockchain Specialization",
            platform: "University at Buffalo - Coursera",
            link: "/blockchain.pdf",
            date: "July 28, 2022",
        },
        {
            title: "Supervised Machine Learning",
            platform: "Stanford Online - DeepLearning.AI - Coursera",
            link: "/supervised.pdf",
            date: "October 30, 2022",
        },
        {
            title: "Work In Progress...",
            platform: "",
            link: "#",
            date: "???",
        },
    ];

    return (
        <section
            id="certifications"
            className="py-16 px-6 bg-[#1a1a1a] bg-opacity-90 text-center text-[#cccccc]"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#52b788] drop-shadow-md">
                Certifications
            </h2>
            <div className="relative">
                <div className="hidden sm:block border-l-2 border-[#52b788] absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="space-y-12">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between w-full relative group"
                        >
                            <div className="w-full sm:w-5/12 text-center sm:text-right sm:pr-8 mb-4 sm:mb-0">
                                <p className="text-lg font-semibold">{cert.date}</p>
                            </div>

                            <div className="w-8 h-8 bg-[#52b788] rounded-full border-4 border-[#1a1a1a] sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-4 sm:mb-0 mx-auto sm:mx-0 sm:top-1/2 sm:-translate-y-1/2 hidden sm:block group-hover:bg-[#cccccc] group-hover:border-[#52b788] transition duration-300"></div>

                            <div className="w-full sm:w-5/12 text-center sm:text-left sm:pl-8">
                                <h3 className="text-xl font-bold text-[#52b788]">{cert.title}</h3>
                                <p className="text-sm">{cert.platform}</p>
                                {cert.link !== "#" && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-3 py-1 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 mt-2 text-sm"
                                    >
                                        View
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
