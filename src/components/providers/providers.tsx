'use client';

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { ReactNode, useEffect, Suspense } from "react";

function NavigationEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.done();
        return () => {
            NProgress.start();
        };
    }, [pathname, searchParams]);

    return null;
}

export function NavigationProvider({
                                       children
                                   }: {
    children: ReactNode
}) {
    useEffect(() => {
        NProgress.configure({
            minimum: 0.3,
            easing: 'ease',
            speed: 500,
            showSpinner: false,
        });
    }, []);

    return (
        <>
            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>
            {children}
        </>
    );
}