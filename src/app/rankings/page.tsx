import PageLayout from '@/components/layout/page-layout';
import { GiCrossedSwords, GiTrophy, GiLaurelCrown } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa6';

export default function RankingsPage() {
    return (
        <PageLayout maxWidth="7xl" className="min-h-screen px-4">
            <section className="py-8">
                <h1 className="text-4xl font-bold text-white mb-6">Rankings</h1>

                {/* Season Info */}
                <div className="bg-blue-600 rounded-lg p-6 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-2">Season System Coming Soon</h2>
                        <p className="text-blue-100 max-w-2xl">
                            Compete in different categories, climb the ranks, and earn exclusive rewards. Our ranking system will feature both solo and guild achievements.
                        </p>
                    </div>
                </div>

                {/* Ranking Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <GiCrossedSwords className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">PvP Rankings</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="text-white font-medium mb-1">1v1 Ranked</h4>
                                <p className="text-gray-400 text-sm">Individual skill-based matchmaking</p>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="text-white font-medium mb-1">Team Ranked</h4>
                                <p className="text-gray-400 text-sm">Coordinated team battles</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <FaUsers className="w-6 h-6 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">Guild Rankings</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="text-white font-medium mb-1">Territory Control</h4>
                                <p className="text-gray-400 text-sm">Compete for strategic locations</p>
                            </div>
                            <div className="bg-gray-900/50 p-4 rounded-lg">
                                <h4 className="text-white font-medium mb-1">Guild vs Guild</h4>
                                <p className="text-gray-400 text-sm">Organized guild warfare</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rewards Preview */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-6">
                        <GiTrophy className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-bold text-white">Season Rewards</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <GiLaurelCrown className="w-8 h-8 text-yellow-500" />
                                <span className="text-xs text-gray-400">Top Rank</span>
                            </div>
                            <h4 className="font-medium text-white mb-1">Elite Rewards</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Exclusive Titles</li>
                                <li>• Unique Equipment</li>
                                <li>• Special Effects</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <GiLaurelCrown className="w-8 h-8 text-gray-400" />
                                <span className="text-xs text-gray-400">Mid Rank</span>
                            </div>
                            <h4 className="font-medium text-white mb-1">Advanced Rewards</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Season Titles</li>
                                <li>• Rank Emblems</li>
                                <li>• Currency Bonus</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-start mb-3">
                                <GiLaurelCrown className="w-8 h-8 text-bronze-500" />
                                <span className="text-xs text-gray-400">Entry Rank</span>
                            </div>
                            <h4 className="font-medium text-white mb-1">Basic Rewards</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Participation Rewards</li>
                                <li>• Basic Emblems</li>
                                <li>• Season Currency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}