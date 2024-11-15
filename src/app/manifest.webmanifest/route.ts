import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants/site';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(): Promise<NextResponse> {
    const manifest: MetadataRoute.Manifest = {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    };

    return NextResponse.json(manifest);
}