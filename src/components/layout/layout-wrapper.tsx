"use client";

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
                {children}
            </main>
            <footer className="bg-gray-900 text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-8 md:px-16">
                    <p className="text-center">&copy; {new Date().getFullYear()} Kyva Online. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};