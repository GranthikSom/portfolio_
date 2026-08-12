"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden z-10">
      {/* Giant Background Typography */}
      <div className="absolute top-10 left-[-5vw] pointer-events-none opacity-[0.04] z-0 overflow-hidden mix-blend-overlay">
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white">
          SAY
        </h1>
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white ml-20">
          HELLO
        </h1>
      </div>

      {/* Decorative pulse ring */}
      <motion.div 
        animate={{ scale: [1, 2, 2.5], opacity: [0.3, 0.1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-500 rounded-full -z-10"
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-20 pl-4 border-l-4 border-amber-500"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
            Contact
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-2xl mx-auto text-center mt-12 glass-card p-12 rounded-[2rem] border border-white/10"
        >
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg mb-12 leading-relaxed"
          >
            I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
          
          <motion.a
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.5 }}
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <motion.div
               animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Mail size={20} />
            </motion.div>
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
