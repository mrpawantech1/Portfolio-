"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] font-black text-massive-bg tracking-tighter uppercase m-0 p-0 select-none"
        >
          PORTFOLIO
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* Left Typography */}
        <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-white/60 font-medium italic text-lg mb-2">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
              {PORTFOLIO_DATA.name.split(' ')[0]} <br/>
              <span className="text-white">{PORTFOLIO_DATA.name.split(' ')[1] || ''}</span>
            </h1>
            
            <h2 className="text-accent-red font-bold text-xl uppercase tracking-widest mb-6">
              Web Designer & <br/> UI/UX Creator
            </h2>

            <p className="text-white/50 text-sm max-w-sm leading-relaxed mb-8">
              {PORTFOLIO_DATA.about.substring(0, 180)}...
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/40">
              <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
              Available Worldwide
            </div>
          </motion.div>
        </div>

        {/* Center/Right Cutout Image */}
        <div className="md:col-span-7 relative h-[60vh] md:h-[85vh] flex justify-center items-end order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] h-full"
          >
            {/* MAKE SURE 474.png IS A TRANSPARENT CUTOUT FOR BEST EFFECT */}
            <Image 
              src="/474.png" 
              alt="Pawan Kumar"
              fill
              className="object-contain object-bottom filter drop-shadow-2xl brightness-110 contrast-125"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
      }
            
