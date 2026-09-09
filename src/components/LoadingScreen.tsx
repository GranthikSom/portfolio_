"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "";
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0f25] text-white select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-2 text-white"
            >
              Granthik Som
            </motion.h1>

            <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase mb-8">
              Initializing... {progress}%
            </span>

            {/* Progress bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 shadow-[0_0_12px_rgba(251,146,60,0.6)] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
