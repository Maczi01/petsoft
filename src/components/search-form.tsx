'use client';

import { useSearchContext } from '@/lib/hooks';

export const SearchForm = () => {
    const { searchQuery, handleChangeSearchQuery } = useSearchContext();
    return (
        <form className="size-full">
            <input
                type="search"
                placeholder="Search pets"
                className="size-full rounded-md bg-white/20
            px-5 outline-none transition hover:bg-white/30 focus:bg-white/50"
                value={searchQuery}
                onChange={event => handleChangeSearchQuery(event.target.value)}
            />
        </form>
    );
};
