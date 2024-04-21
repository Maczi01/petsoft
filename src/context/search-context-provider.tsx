'use client';

import { createContext, ReactNode, useState } from 'react';

type SearchContextProvider = {
    children: ReactNode;
};

type TSearchContext = {
    searchQuery: string;
    handleChangeSearchQuery: (query: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export const SearchContextProvider = ({ children }: SearchContextProvider) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeSearchQuery = (query: string) => {
        setSearchQuery(query);
    };

    const value = {
        searchQuery,
        handleChangeSearchQuery,
    };

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
