'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav-items';

type MobileNavProps = {
    isAuthenticated: boolean;
    isOpen: boolean;
    onClose: () => void;
};

export const MobileNav: React.FC<MobileNavProps> = ({
                                                        isAuthenticated,
                                                        isOpen,
                                                        onClose
                                                    }) => {
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside of nav
    useEffect(() => {
        if (isOpen) {
            const handleClick = (event: MouseEvent) => {
                if (navRef.current && !navRef.current.contains(event.target as Node)) {
                    onClose();
                }
            };

            setTimeout(() => {
                document.addEventListener('click', handleClick);
            }, 0);

            return () => document.removeEventListener('click', handleClick);
        }
    }, [isOpen, onClose]);

    // Close menu on scroll
    useEffect(() => {
        if (isOpen) {
            const handleScroll = () => onClose();
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isOpen, onClose]);

    // Handle navigation
    const handleNavigation = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
        const href = event.currentTarget.getAttribute('href');
        if (href === pathname) {
            event.preventDefault();
            onClose();
        }
        setTimeout(onClose, 150);
    }, [pathname, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop overlay - positioned under the navbar */}
            <div
                className="fixed inset-0 top-[64px] bg-black/40 backdrop-blur-sm z-30"
                aria-hidden="true"
            />

            {/* Navigation menu */}
            <div className="fixed inset-x-0 top-16 z-40 px-4" ref={navRef}>
                <div className="overflow-hidden rounded-lg bg-gray-900 shadow-2xl ring-1 ring-gray-800">
                    <div className="py-3">
                        {NAV_ITEMS.map((item) => (
                            (!item.authRequired || isAuthenticated) && (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleNavigation}
                                    className={`relative block w-full text-left px-4 py-3 text-base font-medium transition-all group
                                        ${pathname === item.href
                                        ? 'text-blue-400 bg-gray-800'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10 tracking-wide">{item.label}</span>

                                    {/* Active state styles */}
                                    {pathname === item.href && (
                                        <>
                                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent" />
                                            <span className="absolute left-0 top-0 h-full w-[2px] bg-blue-500" />
                                        </>
                                    )}

                                    {/* Hover effect */}
                                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Auth section */}
                    <div className="px-3 py-4 border-t border-gray-800/80">
                        <Link
                            href="/auth/login"
                            className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            onClick={handleNavigation}
                        >
                            Login
                        </Link>
                        <Link
                            href="/auth/register"
                            className="block w-full text-center mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-sm transition-colors"
                            onClick={handleNavigation}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};