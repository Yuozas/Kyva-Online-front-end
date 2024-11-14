'use client';

import PageLayout from '@/components/layout/page-layout';
import Link from 'next/link';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';
import { PiChalkboardTeacher, PiUsersThree } from 'react-icons/pi';
import { GiDiscussion } from 'react-icons/gi';

export default function CommunityPage() {
    // @ts-ignore
    return (
        <PageLayout maxWidth="7xl" className="min-h-screen px-4">
            <section className="py-8">
                <h1 className="text-4xl font-bold text-white mb-6">Community</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Discord and Social */}
                    <div className="space-y-8">
                        {/* Discord Widget Section */}
                        <div className="bg-black bg-opacity-10 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <FaDiscord className="w-6 h-6 text-blue-400" />
                                <h2 className="text-2xl font-bold text-white">Join Our Discord</h2>
                            </div>
                            <iframe
                                src="https://discord.com/widget?id=1306381950029922344&theme=dark"
                                width="100%"
                                height="500"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Social Links */}
                        <div className="bg-black bg-opacity-10 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
                            <div className="space-y-4">
                                <Link
                                    href="https://discord.gg/KUuCGqTGsP"
                                    target="_blank"
                                    className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <FaDiscord className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Discord Server</div>
                                        <div className="text-sm text-gray-400">Join our growing community</div>
                                    </div>
                                </Link>

                                <Link
                                    href="https://github.com/Yuozas/Kyva-Online-front-end"
                                    target="_blank"
                                    className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <FaGithub className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">GitHub Repository</div>
                                        <div className="text-sm text-gray-400">Follow development progress</div>
                                    </div>
                                </Link>

                                <Link
                                    href="https://x.com/kyvaonline"
                                    target="_blank"
                                    className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg text-gray-300 hover:text-white hover:bg-gray-900 transition-colors group"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <FaXTwitter className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Twitter/X</div>
                                        <div className="text-sm text-gray-400">Latest updates and announcements</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Community Features */}
                    <div className="space-y-8">
                        {/* Community Features Section */}
                        <div className="bg-black bg-opacity-10 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Community Features</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <PiUsersThree className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <h3 className="font-medium text-white">Guild System</h3>
                                    </div>
                                    <p className="text-gray-400">Create or join guilds, participate in guild wars, and compete for territory control.</p>
                                </div>

                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <GiDiscussion className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <h3 className="font-medium text-white">Forums</h3>
                                    </div>
                                    <p className="text-gray-400">Discuss strategies, share builds, and engage with other players (coming soon).</p>
                                </div>

                                <div className="bg-gray-900/50 p-4 rounded-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                            <PiChalkboardTeacher className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <h3 className="font-medium text-white">Community Events</h3>
                                    </div>
                                    <p className="text-gray-400">Participate in community-driven events, tournaments, and special challenges.</p>
                                </div>
                            </div>
                        </div>

                        {/* Community Guidelines Preview */}
                        <div className="bg-black bg-opacity-10 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Community Guidelines</h2>
                            <p className="text-gray-300 mb-4">
                                We&apos;re building a friendly and inclusive community. Our guidelines ensure everyone can enjoy
                                their time in Kyva Online.
                            </p>
                            <div className="space-y-2 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p>Be respectful to other players</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p>No harassment or hate speech</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <p>Keep discussions constructive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}