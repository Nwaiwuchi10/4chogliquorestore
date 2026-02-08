'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from "../../public/assets/hero/log.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-bg-darker/80 backdrop-blur-md border-b border-wine-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center h-full">
                        <Image
                            src={logo}
                            alt="4CHOG Liquors Logo"
                            width={120}     // give it a real base size
                            height={120}
                            priority
                            className="h-auto w-auto object-contain pt-32 -mt-[45px]"
                        />
                    </Link>



                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#home" className="text-text-light hover:text-wine-accent transition-colors duration-300">
                            Home
                        </Link>
                        <Link href="#about" className="text-text-light hover:text-wine-accent transition-colors duration-300">
                            About us
                        </Link>
                        <Link href="#collection" className="text-text-light hover:text-wine-accent transition-colors duration-300">
                            Collection
                        </Link>
                        <Link href="#blogs" className="text-text-light hover:text-wine-accent transition-colors duration-300">
                            Blogs
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-2 bg-wine-primary hover:bg-wine-secondary transition-colors duration-300 rounded-md text-text-light font-medium"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-text-light focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-bg-darker/95 backdrop-blur-lg border-t border-wine-primary/20 h-[100vh]">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="#home" className="block px-3 py-2 text-text-light hover:text-wine-accent transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="block px-3 py-2 text-text-light hover:text-wine-accent transition-colors">
                            About us
                        </Link>
                        <Link href="#collection" className="block px-3 py-2 text-text-light hover:text-wine-accent transition-colors">
                            Collection
                        </Link>
                        <Link href="#blogs" className="block px-3 py-2 text-text-light hover:text-wine-accent transition-colors">
                            Blogs
                        </Link>
                        <Link href="#contact" className="block px-3 py-2 text-text-light hover:text-wine-accent transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
