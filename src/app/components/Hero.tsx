export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] px-6">
            <div className="relative">
                <img
                    src="/me.png"
                    alt="Samuele Lolli"
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-[#52b788] drop-shadow-md">
                Hello, I’m Samuele Lolli
            </h1>
            <p className="text-xl sm:text-2xl text-[#cccccc] mb-6 leading-relaxed">
                I am currently studying Computer Science at University of Bologna. Passionate about AI with a strong
                foundation in programming and problem-solving.
            </p>

            {/* Bottoni */}
            <div className="flex space-x-6">
                <a
                    href="/CV.pdf"
                    download
                    className="px-6 py-3 bg-[#52b788] text-white font-semibold rounded-lg hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md"
                >
                    Download CV
                </a>
                <a
                    href="https://github.com/samuele-lolli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#52b788] text-white font-semibold rounded-lg hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md"
                >
                    GitHub
                </a>
            </div>
        </section>

    );
}
