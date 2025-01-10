export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-[#1a1a1a] bg-opacity-90 fixed w-full z-10 shadow-md">
            <a href="#top" className="text-[#52b788] text-xl font-bold hover:text-[#cccccc] transition duration-300">
                Home
            </a>
            <div className="flex space-x-6">
                <a href="#about" className="text-[#52b788] hover:text-[#cccccc] transition duration-300">
                    About
                </a>
                <a href="#skills" className="text-[#52b788] hover:text-[#cccccc] transition duration-300">
                    Skills
                </a>
                <a href="#projects" className="text-[#52b788] hover:text-[#cccccc] transition duration-300">
                    Projects
                </a>
                <a href="/blog" className="text-[#52b788] hover:text-[#cccccc] transition duration-300">
                    Blog
                </a>
            </div>
        </nav>
    );
}