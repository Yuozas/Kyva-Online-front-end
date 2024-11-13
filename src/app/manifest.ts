import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Kyva Online',
        short_name: 'Kyva',
        description: 'Strategic Fantasy RPG featuring tactical combat, faction-based gameplay, and deep character customization',
        start_url: '/',
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/images/kyva-favicon-black.svg',
                sizes: '32x32',
                type: 'image/svg+xml'
            }
        ]
    }
}