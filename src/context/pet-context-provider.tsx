'use client'

import { createContext, useState } from 'react';
import { Pet } from '@/lib/types';

type PetContextProvider = {
    data: Pet[];
    children: React.ReactNode;
}

type TPetContext = {
    pets: Pet[];
    handleChangeSelectedPetId: (string: id) => void;
    selectedPetId: string | null;
}

export const PetContext = createContext<TPetContext | null>(null);


export const PetContextProvider = ({ data, children } : PetContextProvider) => {
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    }

    console.log({selectedPetId})

    const value = {
        pets,
        setPets,
        selectedPetId,
        handleChangeSelectedPetId,
    };

    return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
};
