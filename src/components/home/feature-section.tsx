"use client";

import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/page-layout';
import { HERO_FEATURES } from './constants';
import Image from "next/image";

export const FeatureSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % HERO_FEATURES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gray-900">
            <PageLayout>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            {HERO_FEATURES[activeFeature].title}
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {HERO_FEATURES[activeFeature].description}
                        </p>
                        <div className="flex gap-4">
                            {HERO_FEATURES.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFeature(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === activeFeature ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg aspect-video overflow-hidden">
                        <Image
                            src="/api/placeholder/800/450"
                            alt={HERO_FEATURES[activeFeature].title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </PageLayout>
        </section>
    );
};