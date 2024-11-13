import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { NavigationProvider } from "@/components/providers/providers";
import { ReactNode } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Kyva Online",
    description: "Strategic Fantasy RPG",
    icons: {
        icon: '/images/kyva-favicon-black.svg',
        shortcut: '/images/kyva-favicon-black.svg',
        apple: '/images/kyva-favicon-black.svg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://kyva.online',
        siteName: 'Kyva Online',
        title: 'Kyva Online',
        description: 'Strategic Fantasy RPG',
        images: [
            {
                url: '/images/kyva-favicon-black.svg',
                width: 32,
                height: 32,
                alt: 'Kyva Online',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kyva Online',
        description: 'Strategic Fantasy RPG',
        images: ['/images/kyva-favicon-black.svg'],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
            <NavigationProvider>
                <Navbar />
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
            </NavigationProvider>
        </ErrorBoundary>
        </body>
        </html>
    );
}