"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/page-layout';

export const HeroSection = () => (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-end pb-16 md:pb-32">
        {/* Background Image with responsive sizing */}
        <Image
            src="/images/hero-bg-4k.png"
            alt="Kyva Online Hero"
            fill
            priority
            className="object-cover"
            quality={100}
        />

        {/* Gradient overlay - adjusted for mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent md:from-black/70 md:via-black/30" />

        <PageLayout className="relative z-10">
            <div className="max-w-[640px] px-4 md:px-8">
                <div className="text-left">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-lg">
                        Kyva Online
                        <span className="block text-xl md:text-3xl text-blue-400 mt-2 md:mt-4 font-mono">(会VA)</span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed drop-shadow-lg">
                        Enter a world where strategy meets destiny. Choose your faction, master tactical combat, and forge your legend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/auth/register"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors w-full sm:w-auto"
                        >
                            Start Your Journey
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-semibold text-lg transition-colors w-full sm:w-auto"
                        >
                            Watch Trailer
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    </div>
);