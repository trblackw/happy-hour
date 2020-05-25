import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="h-32 p-5 max-w-3xl">
            <div className="flex flex-col justify-center">
                <span className="block mt-5 font-bold text-3xl" style={{ color: '#1b1b2f' }}>
                    Happy Hour
                </span>
                <span className="text-md block ml-1 text-gray-600">It's 5 o'clock somewhere</span>
            </div>
            <div
                className="absolute inset-0 w-full top-0 right-0 left-0 z-0"
                style={{
                    transformOrigin: 'right top 0px',
                    transform: 'skewY(6deg)',
                    height: '12%',
                    background: '#162447 none repeat scroll 0% 0%',
                }}
            />
            <ul className="flex flex-row items-center text-sm md:text-xl font-semibold justify-end z-50 text-white absolute top-0 right-0 left-0 mr-5 mt-5 md:mr-10 md:mt-10">
                <li className="mr-3">
                    <Link href="/cocktails">
                        <a className="">Cocktail list</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
