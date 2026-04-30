import React from 'react';
// 1. Import FaFileExcel dari 'react-icons/fa' untuk Spreadsheet
import { FaReact, FaPython, FaDatabase, FaFileExcel } from 'react-icons/fa';
// 2. Tambahkan SiGooglecolab
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPandas, SiGooglecolab } from 'react-icons/si';

const Skills = () => {
  // --- DATA SKILLS ---
  const dataSkills = [
    { id: 1, title: "Python", icon: <FaPython /> },
    { id: 2, title: "Pandas", icon: <SiPandas /> },
    { id: 3, title: "Spreadsheets", icon: <FaFileExcel /> }, 
    // 3. Ganti Jupyter jadi Google Colab
    { id: 4, title: "Google Colab", icon: <SiGooglecolab /> },
  ];

  const webSkills = [
    { id: 1, title: "Next.js", icon: <SiNextdotjs /> },
    { id: 2, title: "TypeScript", icon: <SiTypescript /> },
    { id: 3, title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { id: 4, title: "React.js", icon: <FaReact /> },
  ];

  return (
    <section className="bg-black py-24 text-white relative overflow-hidden" id="skills">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto w-[90%] lg:w-[85%] relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
            Tools I’ve Mastered. <br />
            <span className="text-gray-500">Built for scale.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of tools I use proficiently to build scalable solutions...
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* KOLOM KIRI: WEB ECOSYSTEM */}
            <div>
                <div className="flex items-center mb-6 px-1">
                    <h3 className="text-xl font-semibold text-white tracking-tight">Web Ecosystem</h3>
                    <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {webSkills.map((skill) => (
                    <div 
                        key={skill.id} 
                        className="group relative bg-[#111111] border border-white/10 rounded-2xl p-4 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center space-x-4 cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center text-2xl text-white shadow-sm group-hover:scale-105 group-hover:shadow-cyan-500/20 transition-all duration-300">
                            {skill.icon}
                        </div>

                        <h3 className="relative z-10 text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                            {skill.title}
                        </h3>
                    </div>
                    ))}
                </div>
            </div>

            {/* KOLOM KANAN: DATA ANALYTICS */}
            <div>
                <div className="flex items-center mb-6 px-1">
                    <h3 className="text-xl font-semibold text-white tracking-tight">Data Analytics</h3>
                    <div className="h-[1px] flex-grow bg-white/10 ml-4"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    {dataSkills.map((skill) => (
                    <div 
                        key={skill.id} 
                        className="group relative bg-[#111111] border border-white/10 rounded-2xl p-4 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center space-x-4 cursor-default"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10 w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center text-2xl text-white shadow-sm group-hover:scale-105 group-hover:shadow-blue-500/20 transition-all duration-300">
                            {skill.icon}
                        </div>
                        
                        <h3 className="relative z-10 text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                            {skill.title}
                        </h3>
                    </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;