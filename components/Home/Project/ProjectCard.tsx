import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  image: string;
  title: string;
  tech: string[]; 
};

const ProjectCard = ({ image, tech, title }: Props) => {
  return (
    // CARD CONTAINER:
    // 1. rounded-[30px]: Lengkungan sudut khas Apple Bento
    // 2. bg-[#111111]: Warna hitam 'off-black' agar terpisah dari background utama
    // 3. border-white/10: Garis tepi super tipis & halus
    <div className="group relative h-[500px] w-full bg-[#111111] rounded-[30px] border border-white/10 overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-500 mx-auto max-w-[400px]">
      
      {/* --- BAGIAN GAMBAR (60% Tinggi Card) --- */}
      <div className="relative h-[60%] w-full overflow-hidden">
        {/* Overlay Gradient Hitam di bawah gambar agar transisi ke teks mulus */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 opacity-60"></div>
        
        <Image 
          src={image} 
          alt={title} 
          fill 
          // Efek Zoom lambat saat hover (duration-700)
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* --- BAGIAN KONTEN (40% Tinggi Card) --- */}
      <div className="absolute bottom-0 w-full h-fit p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-[#111111] via-[#111111] to-transparent pt-12">
        
        {/* Judul Project */}
        <h1 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight group-hover:text-blue-300 transition-colors">
          {title}
        </h1>

        {/* Tags Teknologi (Glassmorphism Pills) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-gray-300 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tombol Action (Apple Style Circle Button) */}
        <div className="flex items-center gap-3 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
          <span>View My Project</span>
          <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
             <BsArrowRight />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;