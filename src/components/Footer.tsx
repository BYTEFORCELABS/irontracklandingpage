import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] py-10 border-t border-white/10 mt-20 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

        {/* Brand & Socials */}
        <div className="flex flex-col gap-6 items-start">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/logo-dark.png" alt="IronTrack Logo" className="h-4 md:h-5 object-contain" />
            <div className="font-heading font-bold text-sm md:text-base tracking-widest uppercase">
              <span className="text-white">IRON</span><span className="text-primary">TRACK</span>
            </div>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-[250px]">
            The world's most advanced AI-powered fitness tracker, built directly into your device. No hardware required.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-2">Explore</h4>
          <Link href="/" className="text-white/50 hover:text-primary text-sm transition-colors">Home</Link>
          <Link href="/about" className="text-white/50 hover:text-primary text-sm transition-colors">About</Link>
          <Link href="/features" className="text-white/50 hover:text-primary text-sm transition-colors">Features</Link>
          <Link href="/technology" className="text-white/50 hover:text-primary text-sm transition-colors">Technology</Link>
          <Link href="/reviews" className="text-white/50 hover:text-primary text-sm transition-colors">Reviews</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-2">Legal</h4>
          <Link href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Terms of Service</Link>
          <Link href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Contact Us</Link>
          <p className="text-white/40 text-sm mt-4">© {new Date().getFullYear()} IronTrack.</p>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col gap-4 md:items-end">
          <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-2 md:text-right w-full">Get The App</h4>
          <a href="#" className="flex items-center justify-center gap-2 border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors w-[160px] bg-black">
            <svg viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.1-44.6-35.9-2.8-74.3 22.7-95.1 22.7-20.3 0-51.2-22.1-80-22.1-39.2 0-75.1 23.3-95.4 59.8-41.8 74.9-10.7 186.2 30.1 245.5 19.9 29.2 43.5 61.6 75.3 60.5 30.4-1.2 42.6-19.8 79.5-19.8 36.8 0 48.2 19.8 80 19.3 33.2-.5 53.6-30.8 73-59.5 22.8-33.8 32.1-66.5 32.7-68.2-1.5-.7-49.3-18.9-49.9-74.2zM212.5 142.1c21.8-26.4 36.5-63.1 32.5-99.7-31.5 1.3-69.6 21-92.4 47.4-18.7 21.6-34.9 59.5-30.2 95 34.6 2.7 70.3-18.3 90.1-42.7z" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium tracking-wide">Download on the</span>
              <span className="text-base font-bold tracking-tight -mt-0.5">App Store</span>
            </div>
          </a>

          <a href="#" className="flex items-center justify-center gap-2 border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors w-[160px] bg-black">
            <svg viewBox="0 0 512 512" className="w-5 h-5" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-medium tracking-wide">GET IT ON</span>
              <span className="text-base font-bold tracking-tight -mt-0.5">Google Play</span>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
