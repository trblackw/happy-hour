import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import { Drink } from '../../types';
import { useImmer } from 'use-immer';

interface Props {
    drinks: Drink[];
}

interface State {
    selectedLetter: string;
    drinks: Drink[];
    query?: string;
    queryInputValue: string;
}

const Cocktails: NextPage<Props> = ({ drinks }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const [state, updateState] = useImmer<State>({
        selectedLetter: alphabet[0],
        drinks,
        queryInputValue: '',
    });
    const isFirstRender = useRef(true);

    useEffect(() => {
        (async () => {
            try {
                //skip first render because we'll have the cocktails from the server initially
                if (isFirstRender.current) {
                    isFirstRender.current = false;
                    return;
                }

                const { drinks } = await queryCocktails({ letter: state.selectedLetter, query: state.query });
                updateState(draft => void (draft.drinks = drinks));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [state.selectedLetter, state.query]);

    const handleQuery = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateState(draft => void (draft.query = draft.queryInputValue));
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        updateState(draft => void (draft.queryInputValue = e.target.value));
    };

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <form className="w-1/4 flex flex-row items-center" onSubmit={handleQuery}>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="search"
                        value={state.queryInputValue}
                        onChange={handleInput}
                        placeholder="Search for a cocktail"
                    />
                    <button
                        className="ml-2 rounded-md text-white bg-red-600 hover:bg-red-700 font-semibold focus:outline-none"
                        style={{ padding: '7px 9px' }}
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="flex flex-col justify-start items-end pr-16">
                <span className="block text-gray-600 block">Search alphabetically</span>
                <div className="flex flex-row justify-end items-center">
                    {alphabet.map((letter, index) => (
                        <span
                            key={letter}
                            className="text-sm mx-1 cursor-pointer hover:underline"
                            style={{ color: '#1f4068' }}
                            onClick={() => {
                                updateState(draft => void (draft.selectedLetter = alphabet[index]));
                            }}
                        >
                            {letter.toLocaleUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
            <div className="auto-grid mt-2">
                {state.drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
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

async function queryCocktails({ letter, query }: { letter: string; query?: string }): Promise<Props> {
    const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${query ? `s=${query}` : `f=${letter}`}`
    );
    const { drinks } = await res.json();
    return { drinks };
}

Cocktails.getInitialProps = async (): Promise<Props> => {
    return queryCocktails({ letter: 'a' });
};

export default Cocktails;
