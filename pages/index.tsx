import React from 'react';
import { NextPage } from 'next';
import { Drink } from '../types';

interface Props {
    drinks: Drink[];
}

const Home: NextPage<Props> = ({ drinks = [] }) => {
    return (
        <div className="w-full">
            <div className="w-1/4 mx-auto">
                <label
                    className="block text-sm font-semibold mb-2"
                    htmlFor="username"
                    style={{ color: '#1f4068' }}
                >
                    Thirsty?
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Search for a cocktail"
                />
            </div>
            <div className="auto-grid">
                {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
                    <div key={idDrink} className="flex flex-col justify-center items-center">
                        <h3 className="font-semibold text-gray-800">{strDrink}</h3>
                        <img
                            src={strDrinkThumb}
                            alt={strDrink}
                            height={100}
                            width={100}
                            className="rounded-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

Home.getInitialProps = async (): Promise<Props> => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const { drinks } = await res.json();
    return { drinks };
};

export default Home;
