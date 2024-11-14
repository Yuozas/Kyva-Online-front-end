"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './nav-items';

type DesktopNavProps = {
    isAuthenticated: boolean;
};

export const DesktopNav: React.FC<DesktopNavProps> = ({ isAuthenticated }) => {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
                (!item.authRequired || isAuthenticated) && (
                    <Link
                        draggable="false"
                        key={item.href}
                        href={item.href}
                        className={`relative px-4 py-2 group ${
                            pathname === item.href
                                ? 'text-blue-400'
                                : 'text-gray-300 hover:text-white'
                        }`}
                    >
                        <span className="relative z-10">{item.label}</span>
                        {pathname === item.href && (
                            <>
                                {/* Active indicator */}
                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500" />
                                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-400 blur-sm" />
                            </>
                        )}
                        {/* Hover effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
                    </Link>
                )
            ))}
        </div>
    );
};