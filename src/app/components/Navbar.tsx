export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-[#1b263b] bg-opacity-90 fixed w-full z-10 shadow-md">
            <a href="#top" className="text-[#e63946] text-xl font-bold hover:text-[#a8dadc] transition duration-300">
                Home
            </a>
            <div className="flex space-x-6">
                <a href="#skills" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
                    Skills
                </a>
                <a href="#projects" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
                    Projects
                </a>
                <a href="#contact" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
                    Contact
                </a>
                <a href="/blog" className="text-[#e63946] hover:text-[#a8dadc] transition duration-300">
                    Blog
                </a>
            </div>
        </nav>
    );
}