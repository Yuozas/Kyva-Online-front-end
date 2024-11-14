'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Footer } from './footer';

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className="min-h-screen flex flex-col">
            {/* Main content area with gradient */}
            <div className="flex-grow flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
                <main className={`flex-grow ${!isHomePage ? 'pt-20' : ''}`}>
                    {children}
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};