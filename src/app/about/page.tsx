import PageLayout from '@/components/layout/page-layout';

export default function AboutPage() {
    return (
        <PageLayout maxWidth="7xl" className="py-8">
            <h1 className="text-4xl font-bold mb-6 text-white">About Kyva Online</h1>
            <div className="bg-gray-800/50 p-6 rounded-lg">
                <p className="text-gray-300">
                    Kyva Online is a strategic fantasy RPG that emphasizes tactical combat,
                    versatile character building, and social interaction.
                </p>
            </div>
        </PageLayout>
    );
}