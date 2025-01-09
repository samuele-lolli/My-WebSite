import Footer from "./components/Footer";
import "./styles/globals.css";

export const metadata = {
  title: "Samuele Lolli - Personal Website",
  description: "Personal website, portfolio and blog of a student of computer science really passionate about AI and software engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0d0d0d] text-[#ffffff]">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}