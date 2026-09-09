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
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch mt-12">
          
          {/* Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="w-full lg:w-1/3 relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group h-[400px] lg:h-auto"
          >
            <img
              src="/IMG_5668.jpg"
              alt="Granthik Som"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f25]/80 via-transparent to-amber-500/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] pointer-events-none" />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            className="flex-1 text-left glass-card p-10 lg:p-16 rounded-[2rem] border border-white/10 flex flex-col justify-center relative overflow-hidden group"
          >
            {/* Ambient hover glow */}
            <div className="absolute -inset-20 bg-amber-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full z-0" />
            
            <div className="relative z-10">
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 text-base md:text-lg lg:text-xl mb-12 leading-relaxed md:leading-8 max-w-xl"
              >
                I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
              </motion.p>
              
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6 }}
                href="mailto:granthiksom@gmail.com"
                className="inline-flex items-center gap-4 px-10 py-5 bg-transparent border-2 border-amber-500 text-amber-400 rounded-2xl font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-[#0a0f25] transition-all duration-300"
              >
                <motion.div
                   animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Mail size={24} />
                </motion.div>
                Say Hello
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
