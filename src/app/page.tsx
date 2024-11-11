"use client";

import React from 'react';
import {
  HeroSection,
  FeatureSection,
  FactionSection,
  CtaSection
} from '@/components/home';

export default function HomePage() {
  return (
      <div className="min-h-screen bg-gray-900">
        <HeroSection />
        <FeatureSection />
        <FactionSection />
        <CtaSection />
      </div>
  );
}