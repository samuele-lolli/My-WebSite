export default function Footer() {
    return (
        <footer className="py-6 px-6 bg-[#1a1a1a] bg-opacity-90 text-center shadow-inner">
            <p className="text-[#cccccc]">
                &copy; {new Date().getFullYear()} Samuele Lolli. All rights reserved.
            </p>
        </footer>
    );
}