"use client";
import React, { useCallback } from 'react'
import Image from "next/image";
import Typewriter from "typewriter-effect"
import { BsArrowRight } from 'react-icons/bs';

// Import library particles
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine"; 

// 1. IMPORT FRAMER MOTION
import { motion, Variants } from "framer-motion";

const Hero = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesOptions = React.useMemo(() => ({
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "bubble" },
                resize: true,
            },
            modes: {
                bubble: { distance: 200, size: 4, duration: 2, opacity: 1, speed: 3 },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: {
                value: { min: 0.1, max: 0.7 },
                animation: { enable: true, speed: 1, sync: false }
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    }), []);

    // 2. DEFINISI VARIANTS ANIMASI
    // Container untuk mengatur urutan (Stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Jeda 0.3 detik antar elemen
                delayChildren: 0.2,   // Jeda awal sebelum animasi mulai
            }
        }
    };

    // Item untuk animasi In/Out (Naik Turun + Fade)
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 }, // Mulai dari bawah, transparan, agak kecil
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                type: "spring", // Efek membal halus ala Apple
                stiffness: 50,
                damping: 10 
            }
        }
    };

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions as any} 
            className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Glow Background (Juga bisa dianimasikan dikit biar bernafas) */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] z-0 pointer-events-none"
        ></motion.div>

        {/* 3. TERAPKAN MOTION PADA CONTAINER UTAMA */}
        <motion.div 
            className="relative z-10 flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // once: false agar animasi jalan lagi saat scroll balik
        >
            
            {/* ITEM 1: FOTO PROFIL */}
            <motion.div variants={itemVariants} className="p-[4px] rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20">
                <Image 
                    src="/images/photoprofile.jpeg" 
                    alt="heroimage" 
                    width={150} 
                    height={150} 
                    className="rounded-full border-4 border-slate-900" 
                />
            </motion.div>

            {/* ITEM 2: JUDUL UTAMA */}
            <motion.h1 variants={itemVariants} className="text-[25px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[3rem] sm:leading-[4rem] md:leading-[5rem] mt-6 text-center tracking-wide">
            Transforming Data into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 filter drop-shadow-sm">
                Strategic Insights
            </span>
            </motion.h1>

            {/* ITEM 3: SUB-HEADING & TYPEWRITER */}
            <motion.h2 variants={itemVariants} className="mt-5 text-[18px] sm:text-2xl text-center font-medium flex items-center justify-center gap-2 text-blue-100/80">
            Hi! I'm Mulky - A passionate
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
            <Typewriter 
            options={{
                strings: [
                'Data Engineer',
                'Data Scientist',
                'Data Analyst'
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
            }}/>
            </span>
            </motion.h2>

            {/* ITEM 4: TOMBOL */}
            <motion.div variants={itemVariants} className="mt-8">
                <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 
                hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400 
                transition-all duration-300 cursor-pointer rounded-full text-lg font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95">
                    <span>My Work</span>
                    <BsArrowRight className="w-5 h-5 inline-block text-white" />
                </button>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Hero