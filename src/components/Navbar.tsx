"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return `transition-colors ${pathname === path ? 'text-primary' : 'hover:text-primary'}`;
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between p-4 md:p-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo-dark.png" alt="IronTrack Logo" className="h-5 md:h-8" />
          <div className="font-heading font-bold text-base md:text-xl tracking-widest uppercase">
            <span className="text-white">IRON</span><span className="text-primary">TRACK</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-white/70">
          <Link href="/" className={getLinkClass("/")}>HOME</Link>
          <Link href="/about" className={getLinkClass("/about")}>ABOUT</Link>
          <Link href="/features" className={getLinkClass("/features")}>FEATURES</Link>
          <Link href="/technology" className={getLinkClass("/technology")}>TECHNOLOGY</Link>
          <Link href="/reviews" className={getLinkClass("/reviews")}>REVIEWS</Link>
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a href="#" className="flex items-center justify-center gap-2 border border-white/40 rounded-lg p-2 md:px-3 md:py-1.5 hover:bg-white/10 transition-colors">
            <svg viewBox="0 0 384 512" className="w-4 h-4 md:w-6 md:h-6" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-95.1 22.7-20.3 0-51.2-22.1-80-22.1-39.2 0-75.1 23.3-95.4 59.8-41.8 74.9-10.7 186.2 30.1 245.5 19.9 29.2 43.5 61.6 75.3 60.5 30.4-1.2 42.6-19.8 79.5-19.8 36.8 0 48.2 19.8 80 19.3 33.2-.5 53.6-30.8 73-59.5 22.8-33.8 32.1-66.5 32.7-68.2-1.5-.7-49.3-18.9-49.9-74.2zM212.5 142.1c21.8-26.4 36.5-63.1 32.5-99.7-31.5 1.3-69.6 21-92.4 47.4-18.7 21.6-34.9 59.5-30.2 95 34.6 2.7 70.3-18.3 90.1-42.7z" />
            </svg>
            <div className="hidden md:flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium tracking-wide">Download on the</span>
              <span className="text-base font-bold tracking-tight -mt-0.5">App Store</span>
            </div>
          </a>

          <a href="#" className="flex items-center justify-center gap-2 border border-white/40 rounded-lg p-2 md:px-3 md:py-1.5 hover:bg-white/10 transition-colors">
            <svg viewBox="0 0 512 512" className="w-4 h-4 md:w-5 md:h-5" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="hidden md:flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium tracking-wide">GET IT ON</span>
              <span className="text-base font-bold tracking-tight -mt-0.5">Google Play</span>
            </div>
          </a>

          <button 
            className="md:hidden ml-1 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4 text-base font-semibold tracking-wider text-white/70">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 border-b border-white/5 ${getLinkClass("/")}`}>HOME</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 border-b border-white/5 ${getLinkClass("/about")}`}>ABOUT</Link>
              <Link href="/features" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 border-b border-white/5 ${getLinkClass("/features")}`}>FEATURES</Link>
              <Link href="/technology" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 border-b border-white/5 ${getLinkClass("/technology")}`}>TECHNOLOGY</Link>
              <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className={`py-2 border-b border-white/5 ${getLinkClass("/reviews")}`}>REVIEWS</Link>
            </nav>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-widest font-bold">
              Get Started Today +
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
