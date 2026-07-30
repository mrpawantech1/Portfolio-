"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative text-accent-blue text-6xl font-bold tracking-tighter mb-8 glow-text">
        PK
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 blur-xl bg-accent-blue/30 rounded-full z-[-1]"
        />
      </div>
      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-white/50 text-sm tracking-widest font-mono">
        {progress}% SYSTEM INITIALIZATION
      </div>
    </motion.div>
  );
}
