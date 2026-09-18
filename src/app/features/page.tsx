"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, ShieldCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const fullFeatures = [
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
    title: "TIME UNDER TENSION",
    number: "03",
    description: "Optimize muscle growth",
    insight: "Track the exact time your muscles are under load to maximize hypertrophy and strength gains.",
    image: "/images/gym3.png"
  },
  {
    title: "ANALYTICS",
    number: "04",
    description: "Deep dive into your progress",
    insight: "Visualize your entire fitness journey with comprehensive charts, PR tracking, and muscle fatigue heatmaps.",
    image: "/images/gym4.png"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white selection:bg-primary selection:text-black">
      
      {/* Header */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] mb-6">
            Elite <span className="text-primary">Features.</span><br />
            For Elite <span className="text-white/40">Athletes.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Discover the tools that will transform your training. From AI-powered rep counting to precise form tracking, IronTrack gives you the unfair advantage.
          </p>
        </motion.div>
      </section>

      {/* Feature Details List */}
      <section className="w-full bg-[#0a0a0a] border-y border-white/5 py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {fullFeatures.map((feature, index) => (
            <motion.div 
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  
                  {/* Floating Number */}
                  <div className="absolute -bottom-4 -left-4 font-heading font-black text-[120px] leading-none text-white/10 z-20 pointer-events-none">
                    {feature.number}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest mb-6 uppercase text-white/70">
                  Feature {feature.number}
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-primary mb-4">{feature.title}</h2>
                <h3 className="text-2xl font-bold mb-6">{feature.description}</h3>
                <p className="text-white/60 leading-relaxed text-lg mb-8">
                  {feature.insight}
                </p>
                
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest px-8 py-6">
                  Learn More +
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
