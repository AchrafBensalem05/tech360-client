import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import Navbar

export const metadata: Metadata = {
  title: "Your Website",
  description: "A Next.js website with Tailwind and a Navbar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar /> {/* Add Navbar here */}
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
