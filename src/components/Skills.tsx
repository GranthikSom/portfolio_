"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Dart", "Solidity", "Rust", "C++", "Move", "C"] },
  { category: "Frameworks & Libraries", items: ["Next.js", "React", "Flutter", "Tailwind CSS", "Framer Motion"] },
  { category: "Tools & OS", items: ["Git", "macOS Configuration", "Übersicht", "AeroSpace"] },
  { category: "Web3", items: ["Smart Contracts", "On-chain Verification", "Tokenization"] }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
    visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 0.6, type: "spring" } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
    hover: { scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.5)" }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Giant Background Typography */}
      <div className="absolute top-10 right-[-5vw] pointer-events-none opacity-[0.04] z-0 overflow-hidden mix-blend-overlay">
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white">
          TECH
        </h1>
        <h1 className="text-[25vw] font-black leading-[0.7] tracking-tighter text-white ml-20">
          STACK
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
            Skills
          </h2>
        </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.2)" }}
                className="glass-card p-6 rounded-xl border border-slate-700/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-xl font-semibold mb-6 text-slate-200 border-b border-slate-700/50 pb-2 relative z-10">
                  {skillGroup.category}
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-3 relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={i}
                      variants={tagVariants}
                      whileHover="hover"
                      className="px-4 py-2 bg-slate-800/80 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </section>
  );
}
