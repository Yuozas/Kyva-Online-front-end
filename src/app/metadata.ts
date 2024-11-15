import { Metadata } from "next";

const siteConfig = {
    name: "Kyva Online",
    description: "Strategic Fantasy RPG featuring tactical combat, faction-based gameplay, and deep character customization. Join a unique world where strategy meets destiny.",
    shortDescription: "Strategic Fantasy RPG",
    url: "https://kyva.online",
    ogImage: "/images/kyva-online-logo.png",
    favicon: "/images/kyva-favicon-black.svg",
    twitter: "@kyvaonline",
    keywords: [
        "RPG",
        "Strategy Game",
        "Fantasy Game",
        "Online RPG",
        "Tactical Combat",
        "Multiplayer RPG",
        "Character Customization",
        "Faction-based Game",
        "PvP Game",
        "Strategic RPG"
    ],
    authors: [
        {
            name: "Kyva Online Team",
            url: "https://kyva.online",
        }
    ],
    creator: "Kyva Online Team",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    icons: {
        icon: [
            {
                url: '/favicon.svg',
                type: 'image/svg+xml',
            },
            {
                url: '/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                url: '/favicon.ico',
                type: 'image/x-icon',
            }
        ],
        apple: {
            url: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
    },
    manifest: '/manifest.webmanifest',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 650,
                height: 550,
                alt: `${siteConfig.name} Logo`,
            },
            {
                url: siteConfig.favicon,
                width: 32,
                height: 32,
                alt: `${siteConfig.name} Favicon`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitter,
    },
    alternates: {
        canonical: siteConfig.url,
    },
    category: 'gaming',
};