export default function Hero() {
    return (
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

    );
}
