"use client"; // Wajib untuk Framer Motion di Next.js App Router

import React from 'react';
import { 
  FaGraduationCap, 
  FaTrophy, 
  FaCode, 
  FaGlobeAsia, 
  FaBriefcase, 
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
// Import Framer Motion
import { motion } from 'framer-motion';

const About = () => {
  // --- DATA ---
  const experienceData = [
    {
      id: 1,
      role: "IT Agency Intern",
      company: "TEC ITB",
      date: "2025 - Present",
      description: "Analyzing data for actionable insights in TEC ITB",
    },
    {
      id: 2,
      role: "IT Staff",
      company: "Parade Wisuda April ITB 2026",
      date: "2025 - Present",
      description: "Making a website for Wispril ITB 2026",
    },
    {
      id: 3,
      role: "Secretary",
      company: "Lari Mendaki 2026 SMAN 8 Jakarta",
      date: "2025 - Present",
      description: "Being a secretary for an event that accommodates juniors at SMA Negeri 8 Jakarta to ask questions about campus life and share our useful knowledge in the college selection phase especially for ITB",
    },
    {
      id: 4,
      role: "Secretary I",
      company: "Perwakilan Kelas",
      date: "2024 - 2023",
      description: "Taking notes for every meeting and checking every document issued by entire internal school organizations",
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Informatics Engineering",
      institution: "Institut Teknologi Bandung",
      date: "2025 - Present",
      description: "Enthusiast in data engineering and data science path and specialization in the 2024 ITB curriculum",
    },
    {
      id: 2,
      degree: "Science Major",
      institution: "SMA Negeri 8 Jakarta",
      date: "2022 - 2025",
      description: "Science major with a focus on engineering (taking Math, Physics, Chemistry, and Informatics classes). 8th best graduate with a final score of 93.93",
    },
  ];

  // --- ANIMATION VARIANTS ---
  
  // 1. Container Variant: Untuk mengatur 'staggerChildren' (urutan animasi anak)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar elemen anak
        delayChildren: 0.1,
      },
    },
  };

  // 2. Item Variant: Animasi untuk setiap kartu (Fade In + Slide Up)
  const itemVariants = {
    hidden: { y: 50, opacity: 0 }, // Mulai dari bawah (y: 50) dan transparan
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 15 
      }
    },
  };

  return (
    <section className="bg-black py-24 text-white relative overflow-hidden font-sans" id="about">
      
      {/* Background Ambience (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto w-[90%] lg:w-[85%] relative z-10">
        
        {/* --- HEADER (Animasi Terpisah) --- */}
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // once: false agar animasi ulang saat scroll balik
            className="mb-16 text-center"
        >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Beyond the Syntax
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                About my dreams and my journey so far...
            </p>
        </motion.div>

        {/* --- BENTO GRID LAYOUT (Staggered Animation) --- */}
        {/* Kita ubah div biasa menjadi motion.div */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} // Animasi trigger saat 10% elemen masuk viewport
        >
          
          {/* 1. VISION CARD */}
          <motion.div 
            variants={itemVariants as any} 
            // HAPUS 'row-span-2' di sini. 
            // Ganti 'justify-between' jadi 'justify-start' atau hapus saja biar spacing natural.
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#111111] border border-white/5 rounded-[30px] p-8 md:p-10 flex flex-col justify-start gap-4 hover:scale-[1.01] transition-transform duration-500 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                    <FaRocket className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">
                    My Vision
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                    "To become a catalyst in the tech industry by transforming complex raw data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-bold">strategic, actionable insights</span> that drive innovation globally."
                </p>
            </div>
          </motion.div>

          {/* 3. EXPERIENCE SECTION */}
          <motion.div variants={itemVariants as any} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-[#111111] border border-white/5 rounded-[30px] p-8 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
             
             <div className="flex items-center space-x-3 mb-8">
                <FaBriefcase className="text-blue-500 text-xl" />
                <h3 className="text-xl font-bold">Experience</h3>
             </div>

             <div className="space-y-8 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-800"></div>
                {experienceData.map((item) => (
                    <div key={item.id} className="relative pl-8">
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#111] border-2 border-blue-500"></div>
                        <h4 className="text-white font-bold text-sm">{item.role}</h4>
                        <p className="text-gray-500 text-xs mb-1">{item.company}</p>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                ))}
             </div>
          </motion.div>

          {/* 4. EDUCATION SECTION */}
          <motion.div variants={itemVariants as any} className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 bg-[#111111] border border-white/5 rounded-[30px] p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
             
             <div className="flex items-center space-x-3 mb-8">
                <FaGraduationCap className="text-cyan-500 text-xl" />
                <h3 className="text-xl font-bold">Education</h3>
             </div>

             <div className="space-y-8 relative">
                 <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-800"></div>
                {educationData.map((item) => (
                    <div key={item.id} className="relative pl-8">
                         <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#111] border-2 border-cyan-500"></div>
                        <h4 className="text-white font-bold text-sm">{item.degree}</h4>
                        <p className="text-gray-500 text-xs mb-1">{item.institution}</p>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 text-white/60 text-[10px] mb-2">{item.date}</span>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                    </div>
                ))}
             </div>
          </motion.div>

          {/* 5. ACHIEVEMENTS */}
          <motion.div variants={itemVariants as any} className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#151515] to-[#111111] border border-white/5 rounded-[30px] p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
                <FaTrophy className="text-yellow-500 text-xl" />
                <h3 className="text-xl font-bold">Key Achievements</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/10 transition-colors">
                    <div className="text-2xl">🏅</div>
                    <div>
                        <h4 className="font-bold text-sm text-white">Finalist of “Olimpiade Sains Nasional (OSN)" DKI Jakarta Provincial Round in Physics
</h4>
                        <p className="text-xs text-gray-500">by Ministry of Education, Culture, Research, and Technology</p>
                    </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/10 transition-colors">
                    <div className="text-2xl">🥈</div>
                    <div>
                        <h4 className="font-bold text-sm text-white">2nd Place Indonesian Youth STEAM Challenge (Submarine Torpedo) 2024</h4>
                        <p className="text-xs text-gray-500">by SEAMEO QITEP & Indonesia Scientific Society</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;