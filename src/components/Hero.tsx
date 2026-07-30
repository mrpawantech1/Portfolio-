"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "../data/portfolio";

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative inline-flex cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const slideUp = {
    initial: { y: "100%" },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 0.7, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] }
    })
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0E0E0E] text-white overflow-hidden flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      
      {/* Background Noise Texture for Elite Vibe */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left: Expert Typography & Real Details */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <div className="overflow-hidden mb-4">
            <motion.p 
              variants={slideUp} custom={1} initial="initial" animate="open"
              className="text-[#E63946] font-mono text-sm md:text-base uppercase tracking-[0.3em]"
            >
              {PORTFOLIO_DATA.title}
            </motion.p>
          </div>

          <div className="flex flex-col gap-1 mb-8">
            <div className="overflow-hidden">
              <motion.h1 
                variants={slideUp} custom={2} initial="initial" animate="open"
                className="text-5xl md:text-7xl xl:text-[110px] font-medium leading-[0.9] tracking-[-0.04em]"
              >
                {PORTFOLIO_DATA.name}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                variants={slideUp} custom={3} initial="initial" animate="open"
                className="text-5xl md:text-7xl xl:text-[110px] font-medium leading-[0.9] tracking-[-0.04em] text-gray-500"
              >
                Architecting
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                variants={slideUp} custom={4} initial="initial" animate="open"
                className="text-5xl md:text-7xl xl:text-[110px] font-medium leading-[0.9] tracking-[-0.04em] flex items-center gap-4"
              >
                Digital Trust.
                <span className="hidden md:block w-24 h-2.5 bg-[#E63946] mt-4 rounded-full"></span>
              </motion.h1>
            </div>
          </div>

          <div className="overflow-hidden max-w-2xl mb-10">
            <motion.p 
              variants={slideUp} custom={5} initial="initial" animate="open"
              className="text-gray-400 text-base md:text-lg font-light leading-relaxed"
            >
              Creator of <span className="text-white font-medium">AffiGuard</span> (high-end SaaS revenue-protection platform). Specializing in full-stack architecture, Telegram bot automation, and secure creator tools like <span className="text-white font-medium">LinkGuard Pro</span>.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center gap-6 flex-wrap"
          >
            <MagneticButton>
              <div className="w-[140px] h-[140px] md:w-[150px] md:h-[150px] bg-[#E63946] text-white rounded-full flex items-center justify-center text-xs uppercase tracking-widest font-medium hover:scale-95 transition-transform duration-300 shadow-[0_10px_40px_rgba(230,57,70,0.3)]">
                Explore Work
              </div>
            </MagneticButton>

            <div className="flex flex-col gap-1 border-l border-white/10 pl-6 text-xs text-gray-400 font-mono">
              <span className="text-white font-medium">CORE EXPERTISE:</span>
              <span>• SaaS Product Dev (AffiGuard)</span>
              <span>• Telegram Automation & Bots</span>
              <span>• Full Stack Web Architecture</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Clean Grayscale to Color Image Frame */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-[260px] h-[340px] md:w-[320px] md:h-[440px] rounded-[30px] overflow-hidden bg-[#1A1A1A] group border border-white/10"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            
            {/* Make sure your photo name matches here (e.g., /474.png) */}
            <Image 
              src="/474.png" 
              alt="Pawan Kumar"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
    }
          
