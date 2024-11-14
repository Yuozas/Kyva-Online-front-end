import PageLayout from '@/components/layout/page-layout';
import Link from "next/link";
import {RiArrowRightSLine} from "react-icons/ri";
import {FaFacebook, FaGoogle, FaTwitter} from "react-icons/fa";
import GoogleIcon from "@/components/icons/GoogleIcon";
import {FaXTwitter} from "react-icons/fa6";

export default function RegisterPage() {
    return (
        <PageLayout maxWidth="md" className="py-8">
            <div className="bg-black bg-opacity-10 p-8 rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Sign Up (Coming Soon)</h1>
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


                    <div className="pt-6">
                        {/* Text at the top of the sign-in options */}
                        <p className="text-gray-400 text-center text-xs">Create an account with</p>

                        {/* Container for the sign-in options */}
                        <div className="flex justify-center space-x-4 mt-2">
                            <button className="flex items-center px-4 py-2 bg-white text-white rounded-lg">
                                <GoogleIcon width={16} height={16}/>
                            </button>
                            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
                                <FaFacebook/>
                            </button>
                            <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg">
                                <FaXTwitter/>
                            </button>
                        </div>
                    </div>

                    <div className="pt-8 pb-2">
                        <button
                            type="submit"
                            className="mx-auto bg-gray-800 text-white p-4 rounded-xl opacity-90 hover:bg-gray-900 flex justify-center items-center"
                        >
                            <RiArrowRightSLine className="w-6 h-6 mr-0"/>
                        </button>
                    </div>
                    <Link href="/auth/login"
                          className="text-xs text-gray-400 hover:text-gray-100 hover:underline block text-center mt-4">Already
                        have an account?</Link>
                </form>
            </div>
        </PageLayout>
    );
}