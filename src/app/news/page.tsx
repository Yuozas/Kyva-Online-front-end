import PageLayout from '@/components/layout/page-layout';
import Link from 'next/link';
import { PiNewspaperClipping, PiGameController } from 'react-icons/pi';
import { FaTrophy, FaCode } from 'react-icons/fa6';

export default function NewsPage() {
    return (
        <PageLayout maxWidth="7xl" className="min-h-screen px-4">
            <section className="py-8">
                <h1 className="text-4xl font-bold text-white mb-6">News</h1>

                {/* Latest Update Banner */}
                <div className="bg-blue-600 rounded-lg p-6 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
                    <div className="relative z-10">
                        <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm font-medium text-blue-100 mb-3 inline-block">
                            Latest Update
                        </span>
                        <h2 className="text-2xl font-bold text-white mb-2">Development Roadmap Revealed</h2>
                        <p className="text-blue-100">{`Explore our journey from alpha to full release, and see what's coming next for Kyva Online.`}</p>
                        <Link
                            href="#"
                            className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg mt-4 text-white hover:bg-white/20 transition-colors"
                        >
                            Read More
                        </Link>
                    </div>
                </div>

                {/* News Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <PiGameController className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">Development Updates</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <span className="text-gray-400 text-sm">March 2024</span>
                                <p className="text-gray-300 font-medium">Combat System Progress Update</p>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <span className="text-gray-400 text-sm">February 2024</span>
                                <p className="text-gray-300 font-medium">Faction System Development</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <FaTrophy className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">Tournament News</h3>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg">
                            <span className="text-gray-400">Coming in Beta Phase</span>
                            <p className="text-gray-300 font-medium mt-1">Tournament system details will be revealed soon</p>
                        </div>
                    </div>
                </div>

                {/* Upcoming Features */}
                <div className="bg-gray-800/50 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Upcoming Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <FaCode className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Alpha Testing</h4>
                                <p className="text-gray-400 text-sm">Early access coming Q2 2024</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <PiNewspaperClipping className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Patch Notes</h4>
                                <p className="text-gray-400 text-sm">Regular updates during testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}