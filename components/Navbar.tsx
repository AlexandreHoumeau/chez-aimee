import { Instagram } from 'lucide-react';
import Logo from './Logo';


export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 sticky  top-0 z-50 items-center px-8 sm:px-10 md:px-20 py-2 bg-primary">
            {/* Left side */}

            <div />
            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
                <Logo className="w-24 h-auto sm:w-28 md:w-32" />
            </div>

            {/* Right side */}
            <div className="flex justify-end items-center gap-10">
                <a href="https://www.instagram.com/chezaimee_/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-white w-7 h-7 hover:opacity-80" />
                </a>
            </div>
        </nav>
    );
}