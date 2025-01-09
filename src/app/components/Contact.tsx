export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-[#1a1a1a] bg-opacity-90 text-center text-[#cccccc]">
            <h2 className="text-4xl font-bold mb-6 text-[#52b788] drop-shadow-md">Contact</h2>
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
    );
}
