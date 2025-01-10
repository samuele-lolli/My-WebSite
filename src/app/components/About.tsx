export default function About() {
    return (
        <section id="about" className="py-16 px-6 bg-[#1a1a1a] bg-opacity-90 text-center text-[#cccccc] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#52b788] drop-shadow-md">About Me</h2>
            <div className="px-4">
                <p className="text-lg sm:text-xl mb-4">
                    Hi, I'm Samuele, a dedicated computer science student with a profound passion for artificial intelligence and software engineering. I thrive on exploring the latest advancements in AI, particularly in machine learning and large language models, and enjoy diving deep into their applications to solve real-world problems. My curiosity drives me to stay up-to-date with emerging technologies and innovative trends in the field.
                </p>
                <p className="text-lg sm:text-xl mb-4">
                    For more info, download my resume above.
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#52b788] drop-shadow-md">Education</h3>
                <ul className="list-none space-y-4 mb-4">
                    <li className="text-lg sm:text-xl">
                        <strong>Bachelor's Degree in Computer Science for Management</strong><br />
                        University of Bologna
                    </li>
                    <li className="text-lg sm:text-xl">
                        <strong>Master's Degree in Computer Science</strong><br />
                        University of Bologna
                    </li>
                </ul>
            </div>
        </section>
    );
}