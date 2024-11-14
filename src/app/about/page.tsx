import PageLayout from '@/components/layout/page-layout';
import Link from 'next/link';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';

export default function AboutPage() {
    return (
        <PageLayout maxWidth="7xl" className="min-h-screen px-4">
            <section className="py-8">
                <h1 className="text-4xl font-bold text-white mb-6">About Kyva Online</h1>

                <div className="space-y-8">
                    {/* Game Overview */}
                    <div className="bg-black bg-opacity-10 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Strategic Fantasy RPG</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Kyva Online is a strategic fantasy RPG that emphasizes tactical combat, versatile character building, and social interaction. Choose your faction, forge alliances, and become a legend in a world where every decision matters.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h3 className="text-blue-400 font-semibold mb-2">Tactical Combat</h3>
                                <p className="text-gray-400">Master our unique 6-skill loadout system and engage in strategic battles.</p>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h3 className="text-blue-400 font-semibold mb-2">Faction Warfare</h3>
                                <p className="text-gray-400">Join one of four unique factions and participate in territorial conquest.</p>
                            </div>
                        </div>
                    </div>

                    {/* Development Updates */}
                    <div className="bg-black bg-opacity-10 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Development Status</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <p className="text-gray-300">Alpha testing starting Q2, March 2025</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500/60"></div>
                                <p className="text-gray-300">Beta release planned for Q4, May 2025</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500/30"></div>
                                <p className="text-gray-300">Full release targeted for 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div className="bg-black bg-opacity-10 rounded-lg p-6">
                        <h2 className="text-2xl font-bold text-white mb-4">Connect With Us</h2>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="https://x.com/kyvaonline"
                                target="_blank"
                                className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
                            >
                                <FaXTwitter className="w-5 h-5" />
                                <span>Follow for Updates</span>
                            </Link>
                            <Link
                                href="https://discord.gg/KUuCGqTGsP"
                                target="_blank"
                                className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
                            >
                                <FaDiscord className="w-5 h-5" />
                                <span>Join our Community</span>
                            </Link>
                            <Link
                                href="https://github.com/Yuozas/Kyva-Online-front-end"
                                target="_blank"
                                className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span>Follow Development</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}