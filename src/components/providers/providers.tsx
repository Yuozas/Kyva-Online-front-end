"use client";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import {ReactNode, useEffect} from "react";

export function NavigationProvider({
                                       children
                                   }: {
    children: ReactNode
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.configure({
            minimum: 0.3,
            easing: 'ease',
            speed: 500,
            showSpinner: false,
        });
    }, []);

    useEffect(() => {
        NProgress.done();
        return () => {
            NProgress.start();
        };
    }, [pathname, searchParams]);

    return <>{children}</>;
}