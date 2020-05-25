import React, { ReactNode } from 'react';
import Nav from './Nav';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Nav />
            <main className="m-5 p-5 max-w-screen-xl mx-auto min-h-screen">{children}</main>
        </div>
    );
}
