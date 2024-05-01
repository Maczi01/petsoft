'use client';

import { createContext, ReactNode, useState } from 'react';
import { Pet } from '@/lib/types';

type PetContextProvider = {
    data: Pet[];
    children: ReactNode;
};

type TPetContext = {
    pets: Pet[];
    handleChangeSelectedPetId: (id: string) => void;
    selectedPetId: string | null;
    selectedPet: Pet | undefined;
    numberOfPets: number;
    handleCheckoutPet: (id: string) => void;
    handleAddPet: (pet: Omit<Pet, 'id'>) => void;
    handleEditPet: (petId: string, pet: Omit<Pet, 'id'>) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export const PetContextProvider = ({ data, children }: PetContextProvider) => {
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    const selectedPet = pets.find(pet => pet.id === selectedPetId);
    const numberOfPets = pets.length;
    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };

    const handleCheckoutPet = (id: string) => {
        const newPets = pets.filter(pet => pet.id !== id);
        setPets(newPets);
        setSelectedPetId(null);
    };

    const handleAddPet = (newPet: Omit<Pet, 'id'>) => {
        setPets(prev => [...prev, { id: crypto.randomUUID(), ...newPet }]);
    };

    const handleEditPet = (petId: string, newPetData: Omit<Pet, 'id'>) => {
        setPets(prevState =>
            prevState.map(pet => {
                if (pet.id === petId) {
                    return {
                        ...pet,
                        ...newPetData,
                    };
                }
                return pet;
            }),
        );
    };

    const value = {
        pets,
        setPets,
        selectedPetId,
        selectedPet,
        numberOfPets,
        handleChangeSelectedPetId,
        handleCheckoutPet,
        handleAddPet,
        handleEditPet,
    };

    return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
};
