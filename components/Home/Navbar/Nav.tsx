"use client";
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Nav = ({openNav}: Props) => {
    const [navBg, setNavBg] = useState(false);
    
    useEffect(()=> {
        const handler=()=> {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        
        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);
    
  return (
    <div className={`fixed w-full transition-all duration-200 h-[12vh] z-[10000] 
      ${navBg ? "bg-[#0f142e]/70 shadow-md backdrop-blur-md" : "bg-transparent"}
    `}>
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/* LOGO */}
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    <FaCode className="w-5 h-5 text-black" />
                </div>
                <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">MULKY</h1>
            </div>

            {/* NAVLINKS - UPDATED HOVER EFFECT */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} className="text-base font-medium transition-all duration-200 text-white
                        
                        // INI BAGIAN HOVER GRADIENT:
                        hover:bg-clip-text hover:text-transparent 
                        hover:bg-gradient-to-r hover:from-indigo-400 hover:via-blue-400 hover:to-cyan-400">
                        
                        <p>{link.Label}</p>
                        </Link>
                    );
                })}
            </div>

            {/* buttons */}
            <div className="flex items-center space-x-4">
                
                {/* CV Button */}
                <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg text-white flex items-center space-x-2 
                transition-all duration-300 font-bold
                bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 
                hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400 
                shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                    <BiDownload className="w-5 h-5" />
                    <span>Download CV</span>
                </button>

                {/* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
            </div>
        </div>
    </div>
  )
}

export default Nav;