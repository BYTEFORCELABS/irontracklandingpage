"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Target, ShieldCheck } from "lucide-react";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white selection:bg-primary selection:text-black">
      
      {/* Video Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Absolute Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          {/* Placeholder video from mixkit - a guy working out */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-with-a-kettlebell-in-the-gym-10255-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 uppercase">
              <Zap className="w-4 h-4" /> Powering The Future
            </div>
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] mb-6">
              Zero <span className="text-primary">Latency.</span><br />
              Infinite <span className="text-white/40">Potential.</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Powered by advanced MediaPipe integrations and on-device processing. We've eliminated the cloud to give you instant, real-time feedback with 100% privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Details Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#151515] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">MediaPipe Vision</h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              Utilizing state-of-the-art 33-point skeletal tracking models to understand your exact body position in 3D space with millimeter precision.
            </p>
          </div>

          <div className="bg-[#151515] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">On-Device Edge ML</h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              All processing happens directly on your phone's Neural Engine. No video streams are ever sent to a server, guaranteeing absolute zero latency.
            </p>
          </div>

          <div className="bg-[#151515] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
            <ShieldCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">100% Private</h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base">
              Because we don't stream your camera feed to the cloud, your workout remains completely private. Your data never leaves your device.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
