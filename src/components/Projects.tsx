"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest"
          >
            Selected Projects
          </motion.h2>
          <a href="#" className="hidden md:flex text-white/40 text-xs uppercase tracking-widest hover:text-accent-red transition-colors items-center gap-2">
            View All Projects →
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PORTFOLIO_DATA.projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Box Placeholder */}
              <div className="w-full h-64 bg-surface rounded-sm relative overflow-hidden mb-6 border border-white/5 group-hover:border-accent-red/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:scale-110 transition-transform duration-700">
                   <span className="font-black text-4xl">{project.title.substring(0, 2).toUpperCase()}</span>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-xl uppercase">{project.title}</h3>
                </div>
              </div>

              {/* Number & Info Row */}
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <span className="text-accent-red font-black text-2xl leading-none">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider">{project.title}</h4>
                    <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">
                      {project.tags[0]} Website
                    </p>
                  </div>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white/30 group-hover:text-accent-red transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
          }
