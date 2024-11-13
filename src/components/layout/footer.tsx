'use client';

import Link from 'next/link';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';

export const Footer = () => {
    return (
        <footer className="bg-gray-900/95 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">About Kyva</h3>
                        <p className="text-sm leading-relaxed">
                            Strategic Fantasy RPG featuring tactical combat, faction-based gameplay, and deep character customization.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/community" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Connect</h3>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="https://discord.gg/KUuCGqTGsP"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-lg transition-colors text-sm w-fit"
                            >
                                <FaDiscord className="w-4 h-4" />
                                Join Discord
                            </Link>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://x.com/kyvaonline"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaXTwitter className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://github.com/Yuozas"
                                    target="_blank"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    © {new Date().getFullYear()} Kyva Online. All rights reserved.
                </div>
            </div>
        </footer>
    );
};