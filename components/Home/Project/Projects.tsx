"use client"; 

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from './ProjectCard';

// Data Project Dummy
const projectData = [
  {
    id: 1,
    image: "/images/recomme.png", 
    title: "RecomMe - Place recommendations and automatic itinerary maker",
    tech: ["UI/UX", "Figma", "Business Model"],
  },
  {
    id: 2,
    image: "/images/ruby2.png",
    title: "Ruby - A website for mentally healthy and productive living",
    tech: ["Design Thinking", "HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    id: 3,
    image: "/images/portfolio.png",
    title: "My portfolio website",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

// Responsif Carousel (Adjusted gaps)
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Projects = () => {
  return (
    // Background Hitam Pekat (bg-black)
    <div className="py-24 bg-black relative overflow-hidden" id="projects">
      
      {/* Background Ambience (Blue Glow Deep) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none opacity-60"></div>

      <div className="w-[90%] lg:w-[85%] mx-auto relative z-10">
        
        {/* Header Section (Apple Style: Big & Clean) */}
        <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-4">
              Built for impact.
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium tracking-tight">
              A showcase of technical depth, scalable architecture, and problem-solving through code.
            </p>
        </div>

        {/* Carousel */}
        <div className="project-carousel-wrapper">
            <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={4000} // Sedikit lebih cepat agar dinamis
            centerMode={false}
            infinite
            responsive={responsive}
            itemClass="px-3" // Memberikan jarak antar kartu
            >
            {projectData.map((project) => (
                <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                tech={project.tech}
                />
            ))}
            </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;