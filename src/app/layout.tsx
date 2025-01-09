import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";

export const metadata = {
  title: "Samuele Lolli - Personal Website",
  description: "Personal website, portfolio and blog.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-neon">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}