"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full border border-white/10 flex items-center gap-8 ${
        scrolled 
          ? "bg-slate-900/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 px-8 border-white/20" 
          : "bg-black/20 backdrop-blur-md py-4 px-10"
      }`}
    >
      <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.5 }}>
        <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-black shadow-lg shadow-blue-500/30">
          G.
        </Link>
      </motion.div>
      
      <nav className="hidden md:flex space-x-1">
        {["About", "Skills", "Projects", "Contact"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <Link
              href={`#${item.toLowerCase()}`}
              className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group rounded-full overflow-hidden block"
            >
              <span className="relative z-10">{item}</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 rounded-full"
              />
            </Link>
          </motion.div>
        ))}
      </nav>
      
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex px-6 py-2 rounded-full bg-white text-black font-bold text-sm transition-all relative overflow-hidden group"
      >
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Resume</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.a>
    </motion.header>
  );
}
