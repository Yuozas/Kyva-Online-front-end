'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import PageLayout from '@/components/layout/page-layout';
import { HERO_FEATURES } from './constants';

export const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveFeature((prev) => (prev + 1) % HERO_FEATURES.length);
                setIsAnimating(false);
            }, 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
            <PageLayout>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6 px-4 lg:px-0">
                        <h2
                            className={`text-3xl md:text-4xl font-bold text-white transition-opacity duration-200 ${
                                isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            {HERO_FEATURES[activeFeature].title}
                        </h2>
                        <p
                            className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl transition-opacity duration-200 ${
                                isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}
                        >
                            {HERO_FEATURES[activeFeature].description}
                        </p>

                        {/* Navigation Dots */}
                        <div className="flex items-center gap-3 pt-4">
                            {HERO_FEATURES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setActiveFeature(index);
                                            setIsAnimating(false);
                                        }, 200);
                                    }}
                                    className="group p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
                                    aria-label={`View feature ${index + 1}`}
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === activeFeature
                                                ? 'bg-blue-500 scale-100'
                                                : 'bg-gray-600 scale-75 group-hover:scale-100'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm">
                            {/* Feature Image */}
                            <div className={`aspect-[16/9] transition-opacity duration-200 ${
                                isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}>
                                <Image
                                    src={HERO_FEATURES[activeFeature].img}
                                    alt={HERO_FEATURES[activeFeature].title}
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw"
                                    priority
                                    quality={90}
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/0 pointer-events-none" />

                            {/* Animated Border */}
                            <div className="absolute inset-0 border border-gray-700/50 rounded-lg" />
                            <div className={`absolute inset-0 border-2 border-blue-500/50 rounded-lg transition-opacity duration-500 ${
                                isAnimating ? 'opacity-100' : 'opacity-0'
                            }`} />
                        </div>
                    </div>
                </div>
            </PageLayout>
        </section>
    );
};

export default FeatureSection;