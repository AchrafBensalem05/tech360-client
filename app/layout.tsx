import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar
import HeroSection from "./components/HeroSection";

export const metadata: Metadata = {
  title: "Tech360 Client",
  description: "A Next.js website with Tailwind and a Navbar",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col text-gray-900">
        <Navbar /> {/* Add Navbar here */}
        {/* <HeroSection /> */}
        <main className="container max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
