"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, MonitorPlay, Bot, PenTool } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import Image from "next/image";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-500, 500], [15, -15]);
  const rotateY = useTransform(x, [-500, 500], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <section 
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-accent-blue font-mono tracking-widest uppercase text-sm mb-4">
              Welcome to the Future
            </h2>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple">
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
            
            <div className="h-12 overflow-hidden mb-8">
              <motion.div 
                animate={{ y: [0, -48, -96, -144, -192, 0] }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="flex flex-col text-2xl md:text-3xl font-light text-white/70"
              >
                {PORTFOLIO_DATA.roles.map((role, idx) => (
                  <span key={idx} className="h-12 flex items-center">{role}</span>
                ))}
                {/* Duplicate first for smooth loop */}
                <span className="h-12 flex items-center">{PORTFOLIO_DATA.roles[0]}</span>
              </motion.div>
            </div>

            <p className="text-white/60 max-w-xl text-lg mb-10 leading-relaxed">
              Engineering premium digital atmospheres. Combining deep technical architecture with award-winning aesthetic design.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-full text-white font-medium flex items-center gap-3 border border-accent-blue/30 hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 group"
            >
              Explore Universe
              <motion.span 
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >→</motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Profile Image Section */}
        <div className="flex-1 relative flex justify-center perspective-1000">
          <motion.div 
            style={{ rotateX, rotateY, z: 100 }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            {/* Animated Halo & Neon Rings */}
            <div className="absolute inset-0 rounded-full border border-accent-purple/30 animate-spin-slow"></div>
            <div className="absolute inset-[-20px] rounded-full border-t-2 border-accent-blue animate-[spin_10s_linear_infinite_reverse]"></div>
            
            {/* The Image (474.png) */}
            <div className="absolute inset-2 rounded-full overflow-hidden glass-card p-2 z-10">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/474.png" 
                  alt="Pawan Kumar" 
                  fill
                  className="object-cover object-center scale-110" 
                  priority
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -left-4 p-4 glass-card rounded-2xl z-20 text-accent-blue"><Code2 /></motion.div>
            <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -right-10 p-4 glass-card rounded-2xl z-20 text-accent-purple"><Bot /></motion.div>
            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-8 left-1/4 p-4 glass-card rounded-2xl z-20 text-accent-cyan"><PenTool /></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
