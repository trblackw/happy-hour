import React from 'react';

export default function Nav() {
    return (
        <nav className="h-32 p-5">
            <div className="flex flex-col justify-center">
                <span className="block mt-5 font-bold text-3xl">Happy Hour</span>
                <span className="text-md block ml-6 text-gray-600">It's 5 o'clock somewhere</span>
            </div>
            <div
                className="absolute inset-0 w-full top-0 right-0 left-0 z-0"
                style={{
                    transformOrigin: 'right top 0px',
                    transform: 'skewY(5deg)',
                    height: '10%',
                    background: '#68d391 none repeat scroll 0% 0%',
                }}
            />
            <ul className="flex flex-row items-center text-sm md:text-lg justify-end z-50 text-white absolute top-0 right-0 left-0 mr-5 mt-5 md:mr-10 md:mt-10">
                <li className="mr-3">nav item 1</li>
                <li>nav item 2</li>
            </ul>
        </nav>
    );
}
