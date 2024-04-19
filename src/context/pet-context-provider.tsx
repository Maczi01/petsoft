'use client'

import {createContext, ReactNode, useState} from 'react';
import {Pet} from '@/lib/types';

type PetContextProvider = {
    data: Pet[];
    children: ReactNode;
}

type TPetContext = {
    pets: Pet[];
    handleChangeSelectedPetId: (id: string) => void;
    selectedPetId: string | null;
    selectedPet: Pet | undefined;
}

export const PetContext = createContext<TPetContext | null>(null);


export const PetContextProvider = ({data, children}: PetContextProvider) => {
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    const selectedPet = pets.find(pet => pet.id === selectedPetId);

    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    }

    console.log({selectedPetId})

    const value = {
        pets,
        setPets,
        selectedPetId,
        selectedPet,
        handleChangeSelectedPetId,
    };

    return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
};
