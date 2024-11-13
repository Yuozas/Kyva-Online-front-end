import { Metadata } from "next";

const siteConfig = {
    name: "Kyva Online",
    description: "Strategic Fantasy RPG",
    url: "https://kyva.online",
    ogImage: "/images/kyva-online-logo.png",
    favicon: "/images/kyva-favicon-black.svg",
    twitter: "@kyvaonline"
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.name,
    description: siteConfig.description,
    icons: {
        icon: siteConfig.favicon,
        shortcut: siteConfig.favicon,
        apple: siteConfig.favicon,
    },
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
};