"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type AuthButtonsProps = {
    isAuthenticated: boolean;
};

export const AuthButtons: React.FC<AuthButtonsProps> = ({ isAuthenticated }) => {
    const router = useRouter();

    const handleLogout = async () => {
        // Add your logout logic here
        // await logout();
        router.push('/'); // Use router.push for programmatic navigation
    };

    return (
        <div className="flex items-center space-x-2">
            {!isAuthenticated ? (
                <>
                    <Link
                        href="/auth/login"
                        className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                    >
                        Login
                    </Link>
                    <Link
                        href="/auth/register"
                        className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Register
                    </Link>
                </>
            ) : (
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                    Logout
                </button>
            )}
        </div>
    );
};