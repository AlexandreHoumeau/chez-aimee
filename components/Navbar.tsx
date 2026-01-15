import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';


export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 sticky  top-0 z-50 items-center px-4 sm:px-10 md:px-20 py-2 bg-primary">
            {/* Left side */}
            <div className="hidden md:flex gap-4 sm:gap-6 md:gap-10 text-white font-semibold text-sm md:text-lg">
                <a href="#accueil" className="hover:opacity-80">ACCUEIL</a>
                <a href="#prestation" className="hover:opacity-80">PRESTATION</a>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={120}
                    height={65}
                    className="w-24 h-auto sm:w-28 md:w-32"
                />
            </div>

            {/* Right side */}
            <div className="flex justify-end items-center gap-4 sm:gap-6 md:gap-10">
                <a href="#apropos" className="hidden sm:block text-white font-semibold text-sm md:text-lg hover:opacity-80">À PROPOS</a>
                <a href="#instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80" />
                </a>
            </div>
        </nav>
    );
}