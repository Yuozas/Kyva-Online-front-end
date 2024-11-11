import PageLayout from '@/components/layout/page-layout';

export default function NewsPage() {
    return (
        <PageLayout maxWidth="7xl" className="py-8">
            <h1 className="text-4xl font-bold mb-6 text-white">News</h1>
            <div className="bg-gray-800/50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2 text-white">Latest Updates</h2>
                <p className="text-gray-300">Coming soon...</p>
            </div>
        </PageLayout>
    );
}