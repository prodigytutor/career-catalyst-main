"use client";
import React from 'react';

import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from './AuthProvider';

import { Suspense } from 'react';

//const queryClient = new QueryClient();

const theme = {
    colors: {
        primary: '#0070f3',
        secondary: '#1A202C',
    },
};

const Providers = ({ children }) => {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
         <Suspense fallback={<p>Loading...</p>}>
            <ConvexProvider client={convex}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ConvexProvider>
         </Suspense>
    );
};

export default Providers;