'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Link from 'next/link';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

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
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-center md:text-left">
                            &copy; {new Date().getFullYear()} Kyva Online. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <Link
                                href="https://x.com/kyvaonline"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Twitter"
                            >
                                <FaXTwitter className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://github.com/Yuozas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};