'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = false;
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <header className="sticky top-0 w-full z-50">
            <div className={`w-full backdrop-blur-sm ${
                isHomePage
                    ? 'bg-gradient-to-b from-gray-900/95 via-gray-900/95 to-gray-900/90'
                    : 'bg-gray-900/95'
            }`}>
                <div className="relative w-full max-w-7xl mx-auto px-8 md:px-16 select-none">
                    <div className="flex justify-between items-center h-24" >
                        <Link draggable="false" href="/" className="flex items-center space-x-2 relative">
                            <Image
                                src="/images/kyva-online-logo.png"
                                alt="Kyva Online"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                onDragStart={(e) => e.preventDefault()}
                            />
                        </Link>

                        <DesktopNav isAuthenticated={isAuthenticated} />

                        <div className="hidden md:flex items-center gap-6">
                            <Link
                                draggable="false"
                                href="/auth/login"
                                className="relative px-6 py-2 overflow-hidden group bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg"
                            >
                                <span className="absolute inset-x-0 h-[1px] top-0 bg-blue-400/40" />
                                <span className="absolute inset-x-0 h-[1px] bottom-0 bg-blue-400/40" />
                                <span className="absolute inset-y-0 w-[1px] left-0 bg-blue-400/40" />
                                <span className="absolute inset-y-0 w-[1px] right-0 bg-blue-400/40" />

                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent group-hover:w-full transition-all duration-500" />

                                <span className="relative flex items-center gap-1">
                                    Play
                                    <svg
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden relative w-10 h-10 inline-flex items-center justify-center rounded-lg text-gray-400 hover:text-white focus:outline-none group"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="absolute inset-0 rounded-lg border border-gray-700 group-hover:border-gray-600 transition-colors" />
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <MobileNav
                    isAuthenticated={isAuthenticated}
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;