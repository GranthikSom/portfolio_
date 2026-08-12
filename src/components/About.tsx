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
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, type: "spring" } }
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
          
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative justify-self-center lg:justify-self-start perspective-1000"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-700 shadow-[0_0_40px_rgba(255,255,255,0.05)] group"
            >
              <img
                src="/uploaded_media_1786481538963.jpg"
                alt="Granthik Som portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Decorative background element for image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="glass-card p-8 rounded-2xl text-slate-300 leading-relaxed space-y-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
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
