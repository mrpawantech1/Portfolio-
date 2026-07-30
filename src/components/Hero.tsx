"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Hero() {
  // 3D Mouse Interaction Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-500, 500], [12, -12]);
  const rotateY = useTransform(x, [-500, 500], [-12, 12]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <section 
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* 1. BRUTALIST ELEMENT: Massive Scrolling Background Text */}
      <div className="absolute top-1/3 left-0 w-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, -1500] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap opacity-[0.03]"
        >
          <h1 className="text-[20vw] font-black text-white tracking-tighter uppercase leading-none">
            VIBE CODER — CREATIVE — FULL STACK — VIBE CODER —
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* 2. APPLE/LINEAR ELEMENT: Clean, Luxury Typography (Left Side) */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-white/60 font-medium italic text-lg mb-2">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
              {PORTFOLIO_DATA.name.split(' ')[0]} <br/>
              <span className="text-white">{PORTFOLIO_DATA.name.split(' ')[1] || ''}</span>
            </h1>
            
            <h2 className="text-accent-red font-bold text-xl uppercase tracking-widest mb-6">
              Vibe Coder & <br/> Full Stack Architect
            </h2>

            <p className="text-white/50 text-base max-w-md leading-relaxed mb-8">
              {PORTFOLIO_DATA.about.substring(0, 160)}...
            </p>

            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-red text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white hover:text-black transition-colors duration-300"
              >
                Explore Work
              </motion.button>
              
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/40">
                <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
                System Online
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3. CYBERPUNK 3D ELEMENT: Interactive Glass Card (Right Side) */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center order-1 lg:order-2 perspective-1000">
          <motion.div 
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] group"
          >
            {/* Animated Red Edge Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-accent-red via-transparent to-accent-darkRed rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
            
            {/* Deep Glass Panel */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-end justify-center">
              
              {/* YAHA APNI PHOTO KA NAAM LIKHNA HAI */}
              <Image 
                src="/474.png" 
                alt="Pawan Kumar"
                fill
                className="object-cover object-bottom opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter group-hover:contrast-125"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              
              {/* Cyberpunk UI Overlay within the 3D card */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-sm border border-white/10">
                  <p className="text-[10px] text-accent-red font-mono uppercase tracking-widest">
                    Vibe_Matrix_Active
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-accent-red/30 flex items-center justify-center bg-black/50 backdrop-blur-md">
                  <div className="w-3 h-3 bg-accent-red rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Grid overlay for tech feel */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
