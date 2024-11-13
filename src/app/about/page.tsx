import PageLayout from '@/components/layout/page-layout';
import Link from 'next/link';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';

export default function AboutPage() {
    return (
        <PageLayout maxWidth="7xl" className="py-8">
            <h1 className="text-4xl font-bold mb-6 text-white">About Kyva Online</h1>
            <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                        Kyva Online is a strategic fantasy RPG that emphasizes tactical combat,
                        versatile character building, and social interaction.
                    </p>

                    <div className="mt-12 border-t border-gray-700 pt-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Connect With Us</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://x.com/kyvaonline"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-4 py-2 bg-gray-700/50 rounded-lg"
                            >
                                <FaXTwitter className="w-5 h-5" />
                                <span>Follow on X (Twitter)</span>
                            </Link>
                            <Link
                                href="https://github.com/Yuozas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-4 py-2 bg-gray-700/50 rounded-lg"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span>GitHub Profile</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}