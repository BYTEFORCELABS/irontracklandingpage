"use client";

import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Activity, Target, Timer, ShieldCheck, Dumbbell, Zap, Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "REP COUNTING",
    number: "01",
    description: "Real-time AI rep counting",
    insight: "Every rep matters. Our AI ensures perfect tracking so you can focus on pushing your limits, not doing the math.",
    image: "/images/gym1.png"
  },
  {
    title: "FORM TRACKING",
    number: "02",
    description: "Posture & injury prevention",
    insight: "Bad form leads to injuries. Get instant feedback on your posture to train safely and maximize muscle activation.",
    image: "/images/gym2.png"
  },
  {
    title: "TENSION TIMER",
    number: "03",
    description: "Time under tension metrics",
    insight: "Time under tension is the secret to muscle growth. We track the exact duration of your exertion for optimal gains.",
    image: "/images/gym3.png"
  },
  {
    title: "WORKOUT PLANS",
    number: "04",
    description: "Personalized fitness routines",
    insight: "Stop guessing. Get dynamically generated routines tailored specifically to your goals, equipment, and recovery state.",
    image: "/images/gym4.png"
  },
  {
    title: "GENTLE MOBILITY",
    number: "05",
    description: "Flexibility and joint health",
    insight: "Mobility is the foundation of longevity. These low-impact routines restore joint health and improve daily function.",
    image: "/images/gentle-mobility.png"
  },
  {
    title: "FULL BODY",
    number: "06",
    description: "Comprehensive strength training",
    insight: "Hit every major muscle group in one session. Perfect for maximizing calorie burn and building balanced, functional strength.",
    image: "/images/full-body.png"
  },
  {
    title: "CORE STRENGTH",
    number: "07",
    description: "Build a solid foundation",
    insight: "Your core stabilizes everything you do. Build a bulletproof midsection to improve posture and power in heavy lifts.",
    image: "/images/core-strength.png"
  },
  {
    title: "BEGINNER STRENGTH",
    number: "08",
    description: "Start your fitness journey right",
    insight: "Just starting out? We'll guide you through fundamental movements to build confidence and strength safely.",
    image: "/images/beginner-strength.png"
  },
  {
    title: "ACTIVE AGING",
    number: "09",
    description: "Stay fit and healthy for life",
    insight: "Age is just a number. Maintain bone density, balance, and vitality with routines designed specifically for older adults.",
    image: "/images/active-aging.png"
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 4, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center overflow-x-hidden selection:bg-primary selection:text-black">

      {/* Navbar */}
      <header className="w-full z-50 fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo-dark.png" alt="IronTrack Logo" className="h-5 md:h-8" />
            <div className="font-heading font-bold text-base md:text-xl tracking-widest uppercase">
              <span className="text-white">IRON</span><span className="text-primary">TRACK</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-white/70">
            <a href="#" className="hover:text-primary transition-colors">HOME</a>
            <a href="#" className="hover:text-primary transition-colors">FEATURES</a>
            <a href="#" className="hover:text-primary transition-colors">TECHNOLOGY</a>
            <a href="#" className="hover:text-primary transition-colors">REVIEWS</a>
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
                <a href="#" className="hover:text-primary transition-colors py-2 border-b border-white/5">HOME</a>
                <a href="#" className="hover:text-primary transition-colors py-2 border-b border-white/5">FEATURES</a>
                <a href="#" className="hover:text-primary transition-colors py-2 border-b border-white/5">TECHNOLOGY</a>
                <a href="#" className="hover:text-primary transition-colors py-2 border-b border-white/5">REVIEWS</a>
              </nav>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-widest font-bold">
                Get Started Today +
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="w-full flex flex-col relative">

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

          {/* Hero Typography */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] px-4 pointer-events-none mt-16 md:mt-0">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[8vw] md:text-[80px] lg:text-[110px] font-heading font-black leading-none tracking-tighter text-white w-full text-left uppercase"
            >
              AI-POWERED FITNESS
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex w-full items-center justify-end relative mt-4 md:mt-6 lg:mt-8"
            >
              <div className="absolute left-[15%] w-[40%] h-[120%] bg-primary/90 -skew-x-12 -z-10 mix-blend-screen" />
              <h1 className="text-[11vw] md:text-[120px] lg:text-[150px] font-heading font-black leading-none tracking-tighter text-white uppercase text-right">
                TRACKER
              </h1>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-0 left-1/2 w-full max-w-[1200px] h-[85%] z-[15] pointer-events-none -translate-x-1/2 flex justify-center items-end"
          >
            <img
              src="/hero.jpg"
              alt="Fitness Model"
              className="w-full h-full object-contain object-center opacity-90 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            />
          </motion.div>

        </section>

        {/* OVERLAPPING FEATURE SLIDER */}
        <section className="w-full max-w-[1400px] mx-auto px-4 -mt-20 md:-mt-32 relative z-30">
          <div className="w-full overflow-hidden pb-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            >
              {[...features, ...features].map((feature, i) => (
                <div key={i} className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 relative group overflow-hidden border border-white/10 bg-black aspect-[16/9] md:aspect-auto md:h-[250px] cursor-pointer">
                  <img src={feature.image} alt="Gym" className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-30 md:group-hover:opacity-50 transition-all duration-500 md:group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none overflow-hidden">
                    <div className="flex items-start gap-2 mb-1 md:mb-2 text-primary font-bold transform transition-transform duration-500 md:group-hover:-translate-y-1">
                      <h3 className="font-heading text-lg md:text-2xl uppercase tracking-wider">{feature.title}</h3>
                    </div>
                    <div className="flex justify-between items-end w-full">
                      <div className="flex flex-col opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 max-w-[75%] gap-1">
                        <p className="text-white font-bold text-xs md:text-base leading-tight">{feature.description}</p>
                        <p className="text-white/70 text-[10px] md:text-xs leading-relaxed line-clamp-2 md:line-clamp-none">{feature.insight}</p>
                      </div>
                      <span className="text-4xl md:text-6xl font-heading font-black text-white/20 md:text-white/10 md:group-hover:text-white/20 transition-colors duration-500">{feature.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* STATS / MID SECTION */}
        <section className="w-full max-w-[1400px] mx-auto px-4 py-16 lg:py-32 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">

          {/* Left Text */}
          <div className="flex-1 z-20">
            <h2 className="font-heading font-black text-4xl md:text-6xl leading-[1.1] uppercase mb-4 md:mb-6">
              Precision tracking,<br />
              Zero <span className="text-primary">hardware.</span>
            </h2>
            <p className="text-white/60 mb-6 md:mb-8 max-w-md text-sm md:text-base leading-relaxed">
              We understand that your lifestyle changes, that's why we've made fitness straightforward and stress-free. Transform your space into a smart gym with blazing fast, on-device MediaPipe tracking.
            </p>
            <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest px-8 py-6 w-full md:w-auto">
              Get Started Today +
            </Button>
          </div>

          {/* Center Model */}
          <div className="flex-1 w-full h-[400px] lg:h-[600px] relative z-10 order-first lg:order-none -my-10 lg:my-0 lg:-mx-20">
            <img
              src="/mid.jpg"
              alt="Intense Fitness Model"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
            />
          </div>

          {/* Right Stats Boxes */}
          <div className="flex-1 flex flex-col gap-4 z-20 w-full max-w-sm">
            {[
              { label: "AI PREDICTIONS", num: 60, suffix: " FPS+" },
              { label: "PRIVACY RATING", num: 100, suffix: "% LOCAL" },
              { label: "EXERCISES SUPPORTED", num: 50, suffix: "+" }
            ].map((box, i) => (
              <div key={i} className="border border-white/10 bg-[#151515] p-6 flex flex-col justify-center rounded-sm hover:border-primary/50 transition-colors">
                <span className="text-primary text-xs font-bold tracking-[0.2em] mb-1 flex items-center gap-2">
                  {box.label}
                </span>
                <span className="font-heading font-black text-5xl text-white drop-shadow-md">
                  <AnimatedCounter value={box.num} suffix={box.suffix} />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DIAGONAL MARQUEE */}
        <div className="w-full relative py-12 md:py-20 overflow-hidden bg-[#0F0F0F]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[120vw] bg-primary text-black transform -rotate-3 p-3 md:p-4 flex overflow-hidden border-y-4 md:border-y-[6px] border-primary/20 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
            <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center shrink-0">
                  <span className="font-heading font-black text-2xl md:text-4xl mx-4 uppercase tracking-wider">AI POSE DETECTION</span>
                  <span className="text-xl md:text-2xl mx-4">✦</span>
                  <span className="font-heading font-black text-2xl md:text-4xl mx-4 uppercase tracking-wider">REAL-TIME REP COUNTING</span>
                  <span className="text-xl md:text-2xl mx-4">✦</span>
                  <span className="font-heading font-black text-2xl md:text-4xl mx-4 uppercase tracking-wider">FORM FEEDBACK</span>
                  <span className="text-xl md:text-2xl mx-4">✦</span>
                  <span className="font-heading font-black text-2xl md:text-4xl mx-4 uppercase tracking-wider">MEDIAPIPE INTEGRATION</span>
                  <span className="text-xl md:text-2xl mx-4">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US GRID */}
        <section className="w-full max-w-[1400px] mx-auto px-4 py-16 lg:py-32 flex flex-col gap-8 md:gap-12">

          <h2 className="text-center font-heading font-black text-4xl md:text-6xl uppercase tracking-tight">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Image */}
            <div className="w-full h-full min-h-[300px] lg:min-h-[500px] relative">
              <img src="/grid.jpg" alt="Squat Model" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F0F0F] hidden md:block" />
            </div>

            {/* Right Grid (2x2) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2"
            >

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group bg-primary text-black p-8 md:p-10 flex flex-col justify-center cursor-pointer transition-colors duration-300 hover:bg-primary/90"
              >
                <Zap className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h4 className="font-heading font-black text-xl md:text-2xl uppercase mb-2 md:mb-4">Zero Latency</h4>
                <p className="text-black/70 text-sm font-medium leading-relaxed">
                  Take advantage of our optimized on-device machine learning models. No lag, just instant feedback to maximize your workout efficiency.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group bg-[#151515] text-white p-8 md:p-10 flex flex-col justify-center sm:border-b sm:border-r border-white/5 cursor-pointer transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h4 className="font-heading font-black text-xl md:text-2xl uppercase mb-2 md:mb-4">100% Private</h4>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  Your camera feed never leaves your device. All processing is done locally, ensuring complete privacy during your home workouts.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group bg-[#111111] text-white p-8 md:p-10 flex flex-col justify-center sm:border-r border-white/5 cursor-pointer transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                <Target className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h4 className="font-heading font-black text-xl md:text-2xl uppercase mb-2 md:mb-4">Form Correction</h4>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  We have special algorithms to detect improper posture. Get real-time alerts if your back rounds during deadlifts or squats.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group bg-primary text-black p-8 md:p-10 flex flex-col justify-center cursor-pointer transition-colors duration-300 hover:bg-primary/90"
              >
                <Activity className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h4 className="font-heading font-black text-xl md:text-2xl uppercase mb-2 md:mb-4">Advanced Analytics</h4>
                <p className="text-black/70 text-sm font-medium leading-relaxed">
                  Review your performance post-workout with detailed charts on time under tension, rep speed, and consistency scores.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </section>

      </main>

      <footer className="w-full bg-[#111111] py-10 border-t border-white/10 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand & Socials */}
          <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-2">
              <img src="/images/logo-dark.png" alt="IronTrack Logo" className="h-4 md:h-5 object-contain" />
              <div className="font-heading font-bold text-sm md:text-base tracking-widest uppercase">
                <span className="text-white">IRON</span><span className="text-primary">TRACK</span>
              </div>
            </div>
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
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Home</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Features</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Technology</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Reviews</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-2">Legal</h4>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm transition-colors">Contact Us</a>
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
    </div>
  );
}
