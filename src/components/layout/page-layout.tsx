import { ReactNode } from "react";

type PageLayoutProps = {
    children: ReactNode;
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
};

const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl',
};

export default function PageLayout({
                                       children,
                                       className = "",
                                       maxWidth = "7xl"
                                   }: PageLayoutProps) {
    return (
        <div className={`w-full ${maxWidth ? maxWidthClasses[maxWidth] + ' mx-auto' : ''} ${className}`}>
            {children}
        </div>
    );
}