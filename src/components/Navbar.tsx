"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full border border-white/10 items-center gap-8 ${
          scrolled 
            ? "bg-slate-900/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 px-8 border-white/20" 
            : "bg-black/20 backdrop-blur-md py-4 px-10"
        }`}
      >
        <nav className="flex space-x-1">
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
          className="inline-flex px-6 py-2 rounded-full bg-white text-black font-bold text-sm transition-all relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </motion.header>

      {/* Mobile Drawer Trigger (Top Left) */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="md:hidden fixed top-6 left-6 z-50 text-white flex items-center justify-center p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/20 transition-colors"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={24} />
      </motion.button>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[75vw] max-w-xs z-[100] bg-slate-900 border-r border-white/10 flex flex-col p-8 md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm font-black text-white/60 tracking-widest uppercase">Navigation</span>
                <button 
                  className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-xl font-bold">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-white hover:translate-x-2 transition-all"
                  >
                    {item}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 text-center py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all hover:opacity-90 shadow-lg"
                >
                  Resume
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
