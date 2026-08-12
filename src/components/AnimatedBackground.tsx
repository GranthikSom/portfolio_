"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  
  // Crossfade between city and underground world based on scroll
  const opacityCity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);
  const opacityUnderground = useTransform(scrollY, [0, 600, 1000], [0, 0, 1]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-[#0a0f25]">
      
      {/* City Background (Hero Section) */}
      <motion.div 
        style={{ opacity: opacityCity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf2f8]/5 via-[#172554]/40 to-[#0a0f25] mix-blend-overlay" />
      </motion.div>

      {/* Underground Background (Rest of Site) */}
      <motion.div 
        style={{ opacity: opacityUnderground }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen blur-[3px]"
        >
          <source src="/background2.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for depth, atmosphere, and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f25]/90 via-[#1e1b4b]/70 to-[#0a0f25]/95" />
        {/* Dim Amber / Muted Violet lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-amber-900/20 mix-blend-color" />
      </motion.div>
      
    </div>
  );
}
