"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Alex M.",
    role: "CrossFit Athlete",
    content: "IronTrack completely changed how I train. The rep counting is flawless, but the form tracking is what blew me away. It's like having a coach in your pocket.",
    rating: 5,
    date: "2 days ago"
  },
  {
    name: "Sarah K.",
    role: "Fitness Enthusiast",
    content: "I used to lose count of my reps all the time when I was tired. Now I just set up my phone and focus entirely on the movement. Best fitness app I've used.",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Marcus J.",
    role: "Powerlifter",
    content: "The time under tension metrics are incredible for hypertrophy blocks. Highly recommend for anyone serious about their training.",
    rating: 4,
    date: "2 weeks ago"
  },
  {
    name: "Elena R.",
    role: "Personal Trainer",
    content: "I recommend IronTrack to all my remote clients. It gives me confidence that they are maintaining good form even when I'm not physically there.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "David T.",
    role: "Beginner",
    content: "As a beginner, I was worried about doing exercises wrong and hurting myself. The real-time posture feedback gives me peace of mind.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "James L.",
    role: "Bodybuilder",
    content: "Zero latency is not an exaggeration. The tracking overlay moves exactly with you. The tech under the hood here is seriously impressive.",
    rating: 5,
    date: "2 months ago"
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white selection:bg-primary selection:text-black">
      
      {/* Header */}
      <section className="w-full max-w-[1400px] mx-auto px-4 py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-1 mb-6 text-primary">
            <Star className="fill-primary w-6 h-6" />
            <Star className="fill-primary w-6 h-6" />
            <Star className="fill-primary w-6 h-6" />
            <Star className="fill-primary w-6 h-6" />
            <Star className="fill-primary w-6 h-6" />
          </div>
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] mb-6">
            Don't Just <span className="text-white/40">Take Our</span><br />
            <span className="text-primary">Word For It.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            Join thousands of athletes who have already upgraded their training with IronTrack. Read what our community has to say.
          </p>
          <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest px-8 py-6">
            Leave a Review
          </Button>
        </motion.div>
      </section>

      {/* Masonry Grid of Reviews */}
      <section className="w-full max-w-[1400px] mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#151515] p-8 rounded-2xl border border-white/5 flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <span className="text-primary text-sm uppercase tracking-wider font-bold">{review.role}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`w-4 h-4 ${index < review.rating ? 'fill-primary text-primary' : 'text-white/20'}`} />
                  ))}
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                "{review.content}"
              </p>
              <div className="mt-auto pt-4 border-t border-white/10 text-white/40 text-xs uppercase tracking-wider">
                {review.date}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
