import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import { NavigationProvider } from "@/components/providers/providers";
import { ReactNode } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { metadata } from "@/app/metadata";

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

export { metadata };

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