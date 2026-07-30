"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function About() {
  return (
    <section className="py-32 relative z-10 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card rounded-3xl p-10 md:p-16 max-w-5xl mx-auto relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          The <span className="text-accent-blue">Vibe</span> Architect
        </h2>
        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
          {PORTFOLIO_DATA.about}
        </p>
      </motion.div>
    </section>
  );
}
