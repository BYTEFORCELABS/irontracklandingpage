"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white selection:bg-primary selection:text-black">
      
      {/* Header */}
      <section className="w-full max-w-[1000px] mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 uppercase">
            Our Mission
          </div>
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] mb-8">
            Redefining <span className="text-white/40">The</span><br />
            <span className="text-primary">Standard.</span>
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-[1000px] mx-auto px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8 text-white/70 text-lg md:text-xl leading-relaxed"
        >
          <p>
            IronTrack was born out of a simple frustration: fitness technology was entirely focused on cardio. Runners and cyclists have had GPS watches and precise metrics for over a decade, but weightlifters have been stuck with notebooks and guesswork.
          </p>
          <p>
            We realized that modern smartphones have incredibly powerful cameras and neural engines that were being underutilized. Why rely on subjective feeling when we can use computer vision to track exact joint angles, rep speed, and time under tension?
          </p>
          <div className="my-8 relative rounded-2xl overflow-hidden aspect-video border border-white/10">
            <img src="/images/gym2.png" alt="IronTrack Vision" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white uppercase mt-4 mb-2">Our Vision</h2>
          <p>
            Our vision is to democratize elite-level coaching. Not everyone has access to a dedicated personal trainer to watch every single rep, correct their form, and calculate their optimal training volume.
          </p>
          <p>
            By building IronTrack directly into the device you already own, with zero latency and 100% on-device processing, we're bringing the future of strength training to everyone. No extra hardware, no subscriptions for cloud processing, just pure performance tracking.
          </p>

          <h2 className="text-3xl font-heading font-bold text-white uppercase mt-16 mb-8 text-center md:text-left border-t border-white/10 pt-16">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex flex-col items-center text-center p-6 bg-[#151515] rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                <img src="/images/gym1.png" alt="John Doe" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">John Doe</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Founder & CEO</p>
              <p className="text-sm text-white/50">Former competitive powerlifter obsessed with biomechanics and AI.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#151515] rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                <img src="/images/gym4.png" alt="Jane Smith" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">Jane Smith</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Head of AI</p>
              <p className="text-sm text-white/50">Computer vision expert. Built tracking systems for autonomous tech.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-[#151515] rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
                <img src="/images/gym3.png" alt="Mike Johnson" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-heading font-bold text-xl uppercase">Mike Johnson</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Lead Engineer</p>
              <p className="text-sm text-white/50">Optimizing on-device ML for absolutely zero latency tracking.</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
