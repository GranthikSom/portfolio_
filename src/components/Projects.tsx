"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Sedo",
    description: "An open-source motorcycle dashboard application built with Flutter, providing real-time data and metrics for Android and iOS.",
    tech: ["Dart", "Flutter", "Mobile App"],
    github: "https://github.com/GranthikSom/sedo",
    stars: 0,
  },
  {
    title: "Musix",
    description: "A full-featured music streaming application built with Flutter and a Dart Frog backend. Features audio controls, track skipping, and album browsing.",
    tech: ["Dart", "Flutter", "Dart Frog"],
    github: "https://github.com/GranthikSom/musix",
    stars: 0,
  },
  {
    title: "VerticalBar",
    description: "A sleek, event-driven, zero-polling workspace widget built for Übersicht on macOS. Optimizes CPU and battery usage.",
    tech: ["JavaScript", "macOS", "Übersicht"],
    github: "https://github.com/GranthikSom/VerticalBar",
    stars: 1,
  },
  {
    title: "Ratatui Snake Game",
    description: "A terminal-based implementation of the classic Snake game using the Ratatui library for fast rendering in Rust.",
    tech: ["Rust", "Terminal UI", "Ratatui"],
    github: "https://github.com/GranthikSom/ratatui-snake-game",
    stars: 2,
  },
  {
    title: "Weather App",
    description: "A feature-rich weather application with location-based forecasting, real-time temperature updates, and dynamic Lottie animations.",
    tech: ["Dart", "Flutter", "API Integration"],
    github: "https://github.com/GranthikSom/Weather-app-",
    stars: 4,
  },
  {
    title: "Tone",
    description: "A minimalist, offline music player built specifically for audiophiles, focusing on high-quality playback and clean aesthetics.",
    tech: ["Dart", "Flutter", "Audio"],
    github: "https://github.com/GranthikSom/Tone",
    stars: 0,
  }
];

const projectImages = [
  "/IMG_5902.jpg",
  "/IMG_1666.jpg",
  "/IMG_6176.jpg",
  "/IMG_20221231_154948_Original.jpg",
  "/IMG_5668.jpg",
  "/IMG_4412.jpg"
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 10 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, type: "spring" as const, bounce: 0.4 } },
  };

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden z-10">
      
      {/* Giant Background Typography */}
      <div className="absolute top-20 right-[-5vw] pointer-events-none opacity-[0.04] z-0 overflow-hidden mix-blend-overlay">
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white">
          SELECTED
        </h1>
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white ml-20">
          WORKS
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
            Projects
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pb-20"
        >
          {projects.map((project, index) => {
            // Create a broken grid, asymmetrical layout
            let spanClass = "md:col-span-6 lg:col-span-4"; // default
            let offsetClass = "";
            
            if (index % 5 === 0) {
              spanClass = "md:col-span-12 lg:col-span-8"; // large featured
            } else if (index % 5 === 1) {
              spanClass = "md:col-span-6 lg:col-span-4";
              offsetClass = "lg:translate-y-24"; // staggered
            } else if (index % 5 === 2) {
              spanClass = "md:col-span-6 lg:col-span-5 lg:col-start-2";
            } else if (index % 5 === 3) {
              spanClass = "md:col-span-12 lg:col-span-6";
              offsetClass = "lg:-translate-y-12";
            } else if (index % 5 === 4) {
              spanClass = "md:col-span-6 lg:col-span-5";
              offsetClass = "lg:translate-y-16";
            }

            return (
              <motion.div
                key={index}
                variants={projectVariants}
                className={`${spanClass} ${offsetClass} glass-card rounded-[2rem] p-8 lg:p-10 flex flex-col h-full group relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(45,212,191,0.15)] hover:-translate-y-2`}
              >
                {/* Decorative Japanese-inspired accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-cyan-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
                
                {/* Background glow on hover */}
                <div className="absolute -inset-20 bg-cyan-400/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full z-0" />
                
                {/* Embedded workspace photo for all projects */}
                <div className="absolute inset-y-0 right-0 w-2/3 md:w-1/2 z-0 opacity-10 group-hover:opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-[50%] transition-all duration-700 pointer-events-none overflow-hidden">
                  <img src={projectImages[index % projectImages.length]} alt="Project background" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0f25]/80 to-[#0a0f25] mix-blend-normal" />
                </div>
                
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-inner group-hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <FaGithub size={28} />
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.2, color: "#2dd4bf" }}
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 transition-colors bg-black/20 p-3 rounded-full hover:bg-black/40"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <h3 className="text-3xl font-black mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-cyan-400 transition-all duration-300 relative z-10 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-300/80 text-base lg:text-lg mb-8 flex-grow relative z-10 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-3 text-xs font-bold tracking-widest uppercase text-slate-500 relative z-10 mt-auto">
                  {project.tech.map((t, i) => (
                    <li key={i} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all duration-300">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
