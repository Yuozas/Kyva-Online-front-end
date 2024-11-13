"use client";

import React, { Component, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="text-red-500 p-4">
                    <h2 className="text-lg font-bold">Something went wrong:</h2>
                    <pre className="mt-2">{this.state.error?.message}</pre>
                </div>
            );
        }

        return this.props.children;
    }
}