import PageLayout from '@/components/layout/page-layout';
import Link from "next/link";
import {RiArrowRightSLine} from "react-icons/ri";

export default function RecoveryPage() {
    return (
        <PageLayout maxWidth="md" className="py-8">
            <div className="bg-black bg-opacity-10 p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Account Recovery (Coming Soon)</h1>
                <form className="space-y-4">
                    <div>
                        <label
                            className="block text-sm font-medium mb-1 text-white">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                        />
                    </div>

                    <div className="pt-8 pb-2">
                        <button
                            type="submit"
                            className="mx-auto bg-gray-800 text-white p-4 rounded-xl opacity-90 hover:bg-gray-900 flex justify-center items-center transition-transform transform group-hover:translate-x-1"
                        >
                            <RiArrowRightSLine className="w-6 h-6"/>
                        </button>
                    </div>

                    <div className="mt-4">
                        <Link href="/auth/login"
                              className="text-xs text-gray-400 hover:text-gray-100 hover:underline block text-center">Remember
                            your password?</Link>
                        <Link href="/auth/register"
                              className="text-xs text-gray-400 hover:text-gray-100 hover:underline block text-center mt-1">Create
                            Account</Link>
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}