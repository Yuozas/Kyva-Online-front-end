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
                // Check if the click target is the toggle button or its children
                const toggleButton = document.querySelector('[aria-label="Open main menu"]');
                if (toggleButton && (toggleButton === event.target || toggleButton.contains(event.target as Node))) {
                    return;
                }

                // Only close if clicking outside the nav menu
                if (navRef.current && !navRef.current.contains(event.target as Node)) {
                    onClose();
                }
            };

            // Delay adding the click listener to prevent immediate closure
            const timeoutId = setTimeout(() => {
                document.addEventListener('click', handleClick);
            }, 100);

            return () => {
                document.removeEventListener('click', handleClick);
                clearTimeout(timeoutId);
            };
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
                className="fixed inset-0 top-[95px] bg-black/40 backdrop-blur-sm z-30"
                aria-hidden="true"
            />

            {/* Navigation menu */}
            <div
                className="fixed w-screen md:hidden z-40"
                onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling up
            >
                {/* Navigation menu */}
                <div className="px-4" ref={navRef}>
                    <div className="overflow-hidden rounded-lg bg-gray-900/90 shadow-2xl ring-1 ring-gray-800">
                        <div className="py-3">
                            {NAV_ITEMS.map((item) => (
                                (!item.authRequired || isAuthenticated) && (
                                    <Link
                                        draggable="false"
                                        key={item.href}
                                        href={item.href}
                                        onClick={handleNavigation}
                                        className={`relative block w-full text-left px-4 py-3 text-base font-medium transition-all group select-none
                                        ${pathname === item.href
                                            ? 'text-blue-400 bg-gray-800/80'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        <span className="relative z-10 tracking-wide">{item.label}</span>

                                        {pathname === item.href && (
                                            <>
                                                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent" />
                                                <span className="absolute left-0 top-0 h-full w-[2px] bg-blue-500" />
                                            </>
                                        )}

                                        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                )
                            ))}
                        </div>

                        <div className="px-3 py-4 border-t border-gray-800/80">
                            <Link
                                href="/auth/login"
                                className="block w-full text-center mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-sm transition-colors"
                                onClick={handleNavigation}
                            >
                                Play
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};