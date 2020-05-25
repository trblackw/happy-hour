import React from 'react';

export default function Header() {
    return (
        <section className="relative h-full flex justify-center items-center text-white" style={{ background: 'red'}}>
            <div
                className="absolute inset-0 w-full h-full top-0 right-0 left-0 z-0"
                style={{ transformOrigin: 'right top 0px', transform: 'skewY(6deg)', background: 'rgb(44, 62, 80) none repeat scroll 0% 0%' }}
            />
        </section>
    );
}
