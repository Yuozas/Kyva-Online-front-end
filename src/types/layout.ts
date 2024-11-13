import {ReactNode} from "react";

export type PageLayoutProps = {
    children: ReactNode;
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
};