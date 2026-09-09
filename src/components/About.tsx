"use client";

import { motion } from "framer-motion";
// import Image removed

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 30 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, type: "spring" as const } }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Giant Background Typography */}
      <div className="absolute top-10 left-[-5vw] pointer-events-none opacity-[0.04] z-0 overflow-hidden mix-blend-overlay">
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white">
          ABOUT
        </h1>
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white ml-32">
          ME
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-20 pl-4 border-l-4 border-amber-500"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase drop-shadow-lg">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Editorial Image Collage Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative justify-self-center lg:justify-self-start w-full max-w-[500px] lg:max-w-[600px] h-[600px] perspective-1000"
          >
            {/* Primary Portrait */}
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5, zIndex: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-0 right-0 w-3/4 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group z-20"
            >
              <img
                src="/IMG_4412.jpg"
                alt="Granthik Som portrait"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[40%] hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25]/90 via-transparent to-transparent opacity-60 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] pointer-events-none" />
            </motion.div>

            {/* Secondary Photo (Offset Left) */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateZ: -5, zIndex: 30 }}
              className="absolute bottom-10 left-0 w-1/2 aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] group z-30"
            >
              <img
                src="/IMG_5902.jpg"
                alt="Workspace"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[60%] hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-color pointer-events-none group-hover:opacity-0 transition-opacity" />
            </motion.div>

            {/* Third Photo (Background Layer) */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-10 left-10 w-2/5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 shadow-lg group z-10 opacity-70 blur-[1px] hover:blur-none hover:opacity-100 transition-all duration-500"
            >
              <img
                src="/IMG_6176.jpg"
                alt="Process"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Fourth Photo */}
            <motion.div 
              initial={{ x: -50, y: -50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute top-1/2 -right-10 w-2/5 aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-lg group z-10 opacity-70 blur-[1px] hover:blur-none hover:opacity-100 transition-all duration-500 hover:scale-105 hover:z-40"
            >
              <img
                src="/IMG_1666.jpg"
                alt="Collage Image 1"
                className="w-full h-full object-cover grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity" />
            </motion.div>

            {/* Decorative background element for collage */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-amber-600/20 to-violet-600/20 rounded-full blur-[80px] -z-10 animate-pulse" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="glass-card p-8 rounded-2xl text-slate-300 text-base md:text-lg leading-relaxed md:leading-8 space-y-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
          >
            <motion.p variants={textVariants}>
              I am a versatile Software Engineer with a deep passion for building robust, high-performance applications across multiple domains. My journey in tech spans from crafting pixel-perfect, zero-polling macOS desktop widgets to architecting scalable and highly performant backend systems.
            </motion.p>
            <motion.p variants={textVariants}>
              Through my open-source contributions, I&apos;ve developed tools like <strong>VerticalBar</strong> and <strong>Ubersicht-and-aeroSpace-config</strong> that emphasize ultra-low resource usage and event-driven architectures. I thrive on solving complex system challenges while ensuring a flawless user experience.
            </motion.p>
            <motion.p variants={textVariants}>
              When I&apos;m not coding in <strong>JavaScript/TypeScript</strong> or crafting mobile experiences in <strong>Dart/Flutter</strong>, I&apos;m diving deep into systems programming with <strong>Rust</strong> and building blazing fast terminal applications.
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" 
      />
    </section>
  );
}
