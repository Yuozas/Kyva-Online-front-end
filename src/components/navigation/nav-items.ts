export type NavItem = {
    label: string;
    href: string;
    authRequired?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'About', href: '/about' },
    { label: 'Game Hub', href: '/game', authRequired: true },
    { label: 'Rankings', href: '/rankings' },
];