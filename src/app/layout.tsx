import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IronTrack — AI-Powered Workout Tracker",
  description: "Real-time AI pose detection that counts your reps, tracks form quality, and monitors time under tension.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-white selection:bg-primary selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
