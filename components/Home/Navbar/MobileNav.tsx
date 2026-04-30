import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div className="lg:hidden">
      
      {/* --- BAGIAN 1: OVERLAY BACKGROUND --- */}
      <div
        className={`fixed inset-0 z-[10001] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeNav}
      ></div>

      {/* --- BAGIAN 2: PANEL MENU (Corporate Royal Blue Theme) --- */}
      <div
        // UBAH BACKGROUND: Gradasi Royal Blue Gelap (Slate-900 ke Blue-950)
        // Tambahkan border kiri tipis (border-white/10) untuk separasi yang elegan
        className={`fixed top-0 right-0 bottom-0 z-[10002] flex h-full w-[80%] sm:w-[60%] flex-col justify-center 
        bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 
        border-l border-white/10 shadow-2xl
        text-white transition-transform duration-500 ${navOpenStyle}`}
      >
        
        {/* Link Navigasi */}
        <div className="flex flex-col items-center space-y-8">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              {/* STYLE TEXT:
                  1. Font putih (text-white/90) agar bersih.
                  2. Hover menjadi Emas/Amber (hover:text-amber-400).
                  3. Garis bawah juga berubah menjadi Emas saat hover.
              */}
              <p className="w-fit border-b-[1.5px] border-white/20 pb-1 text-[25px] sm:text-[30px] font-semibold tracking-wide 
              hover:text-amber-400 hover:border-amber-400 transition-all duration-300">
                {link.Label}
              </p>
            </Link>
          ))}
        </div>

        {/* TOMBOL CLOSE (X) */}
        {/* Menggunakan warna putih, hover ke Emas */}
        <CgClose
          onClick={closeNav}
          className="absolute right-6 top-6 h-8 w-8 cursor-pointer text-white hover:text-amber-400 transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default MobileNav;