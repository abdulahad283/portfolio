import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import ScrollRestoration from "@/components/ScrollRestoration";
import FloatingContactButton from "@/components/layout/FloatingContactButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kunwar Singh Gujral Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-base px-6`}>
        <ScrollRestoration />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
