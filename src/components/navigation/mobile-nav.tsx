"use client";
import React from 'react';
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

    if (!isOpen) return null;

    return (
        <div className="px-2 pb-3 space-y-1 bg-gray-900/60 backdrop-blur-sm rounded-lg">
            {NAV_ITEMS.map((item) => (
                (!item.authRequired || isAuthenticated) && (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                            pathname === item.href
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={onClose}
                    >
                        {item.label}
                    </Link>
                )
            ))}
        </div>
    );
};