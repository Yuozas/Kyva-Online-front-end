import PageLayout from '@/components/layout/page-layout';

export default function RegisterPage() {
    return (
        <PageLayout maxWidth="md" className="py-8">
            <div className="bg-gray-800/50 p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Register</h1>
                <form className="space-y-4">
                    <div>
                        <label
                            className="block text-sm font-medium mb-1 text-white">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-1 text-white">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-1 text-white">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium mb-1 text-white">Confirm
                            Password</label>
                        <input
                            type="password"
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Register
                    </button>
                </form>
            </div>
        </PageLayout>
    );
}