"use client";

import React from 'react';
import PageLayout from '@/components/layout/page-layout';
import { FACTIONS } from './constants';

export const FactionSection = () => (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <PageLayout>
            <h2 className="text-4xl font-bold text-center text-white mb-16">
                Choose Your Path
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {FACTIONS.map((faction) => (
                    <div
                        key={faction.name}
                        className="group relative overflow-hidden rounded-lg bg-gray-800/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="aspect-[3/4] relative">
                            <img
                                src={faction.img}
                                alt={faction.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{faction.name}</h3>
                                <p className="text-gray-300 font-mono">{faction.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageLayout>
    </section>
);