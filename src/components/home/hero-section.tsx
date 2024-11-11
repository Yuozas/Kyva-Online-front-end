"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/page-layout';

export const HeroSection = () => (
    <div className="relative min-h-screen flex items-end pb-32">
        {/* Background Image with responsive sizes */}
        <picture className="absolute inset-0">
            {/* 4K screens */}
            <source
                srcSet="/images/hero-bg-4k.png"
                media="(min-width: 2560px)"
            />
            {/* 2K screens and up to 4K */}
            <source
                srcSet="/images/hero-bg-2K.png"
                media="(min-width: 721px)"
            />
            {/* 720p and below */}
            <Image
                src="/images/hero-bg-low-res.png"
                alt="Kyva Online Hero"
                fill
                priority
                className="object-cover"
                quality={100}
            />
        </picture>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <PageLayout className="relative z-10">
            <div className="max-w-[640px] pl-8 md:pl-16">
                <div className="text-left">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Kyva Online
                        <span className="block text-3xl text-blue-400 mt-4 font-mono">(会VA)</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed drop-shadow-lg">
                        Enter a world where strategy meets destiny. Choose your faction, master tactical combat, and forge your legend.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/auth/register"
                            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors"
                        >
                            Start Your Journey
                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-semibold text-lg transition-colors"
                        >
                            Watch Trailer
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    </div>
);