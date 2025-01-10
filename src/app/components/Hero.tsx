import Image from 'next/image';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] px-6">
            <div className="relative">
                <Image
                    src="/me.png"
                    alt="Samuele Lolli"
                    width={192}
                    height={192}
                    quality={100}
                    unoptimized //if false, low quality (???)
                    className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
                />
            </div>
            <h1 className="text-4xl sm:text-7xl font-bold mb-4 text-[#52b788] drop-shadow-md">
                Hello, I’m Samuele Lolli
            </h1>
            <p className="text-lg sm:text-2xl text-[#cccccc] mb-6 leading-relaxed">
            CS student | AI Enthusiast
            </p>

            <div className="flex space-x-4 sm:space-x-6">
                <a
                    href="/CV.pdf"
                    download
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md flex items-center justify-center"
                >
                    <Image
                        src="/download.svg"
                        alt="Download CV"
                        width={32}
                        height={32}
                        className="h-6 sm:h-8"
                    />
                </a>
                <a
                    href="https://github.com/samuele-lolli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md flex items-center justify-center"
                >
                    <Image
                        src="/github.svg"
                        alt="GitHub"
                        width={32}
                        height={32}
                        className="h-6 sm:h-8"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/samuele-lolli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md flex items-center justify-center"
                >
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn"
                        width={32}
                        height={32}
                        className="h-6 sm:h-8"
                    />
                </a>
                <a
                    href="#footer"
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#cccccc] hover:text-[#0d0d0d] transition duration-300 shadow-md flex items-center justify-center"
                >
                    <Image
                        src="/email.svg"
                        alt="Email"
                        width={32}
                        height={32}
                        className="h-6 sm:h-8"
                    />
                </a>
            </div>
        </section>
    );
}
