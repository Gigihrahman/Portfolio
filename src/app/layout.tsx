import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gigih Rahmandita Portfolio",
  description: "Gigih Rahmandita Portfolio Was A Fullstack Developer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#EAE8E1] overflow-y-auto min-h-screen px-3 sm:px-4 md:px-6">
        <div className="container mx-auto bg-white mt-6 justify-center rounded-t-xl block w-[95%] sm:w-[94%] md:w-[92%] lg:w-[90%]">
          <Navbar />

          <div className="sticky top-0 z-10 overflow-visible">{children}</div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-7FZD6MQ22T" />
    </html>
  );
}
