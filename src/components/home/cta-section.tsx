"use client";

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layout/page-layout';

export const CtaSection = () => (
    <section className="py-20 bg-gray-800">
        <PageLayout>
            <div className="relative overflow-hidden rounded-2xl bg-blue-600">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-20" />
                <div className="relative px-8 py-16 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        Ready to Begin Your Adventure?
                    </h2>
                    <p className="text-xl text-white/90 mb-12 font-mono max-w-2xl mx-auto">
                        Join the beta and be among the first to experience the world of Kyva Online.
                    </p>
                    <Link
                        href="/auth/register"
                        className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                    >
                        Sign Up for Alpha Access
                    </Link>
                </div>
            </div>
        </PageLayout>
    </section>
);