import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
            {
                userAgent: 'GPTBot',
                allow: ['/about', '/news'],
                disallow: '/',
            },
        ],
        sitemap: 'https://kyva.online/sitemap.xml',
        host: 'https://kyva.online',
    }
}