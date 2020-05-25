import React, { ReactNode } from 'react';
import Nav from './Nav';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="speckled-gradient">
            <Nav />
            <main className="mx-5 px-5 max-w-screen-xl mx-auto min-h-screen">{children}</main>
        </div>
    );
}
