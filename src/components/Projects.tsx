"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-32 relative z-10 container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
      >
        Selected <span className="text-accent-purple">Works</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="glass-card rounded-2xl p-6 group relative overflow-hidden cursor-pointer h-64 flex flex-col justify-between border border-white/5 hover:border-accent-blue/50 transition-colors duration-500"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-accent-cyan border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="mt-auto flex items-center gap-2 text-white/50 group-hover:text-accent-blue transition-colors w-max"
            >
              Visit Platform <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
  
