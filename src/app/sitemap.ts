import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kyva.online';

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/news`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/rankings`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'hourly' as const,
            priority: 0.8,
        },
    ];
}