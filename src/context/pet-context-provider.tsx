'use client';

import { createContext, ReactNode, useOptimistic, useState } from 'react';
import { Pet } from '@/lib/types';
import { toast } from 'sonner';
import { addPet, deletePet, editPet } from '@/actions/actions';

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
    handleCheckoutPet: (id: string) => Promise<void>;
    handleAddPet: (pet: Omit<Pet, 'id'>) => Promise<void>;
    handleEditPet: (petId: string, pet: Omit<Pet, 'id'>) => Promise<void>;
};

export const PetContext = createContext<TPetContext | null>(null);

export const PetContextProvider = ({ data: pets, children }: PetContextProvider) => {
    const [optimisticPets, setOptimisticPets] = useOptimistic(pets, (state: Pet[], newPet: Pet) => {
        return [...state, newPet];
    });
    const [, setPets] = useState(pets);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
    const selectedPet = optimisticPets.find(pet => pet.id === selectedPetId);
    const numberOfPets = optimisticPets.length;
    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };

    const handleCheckoutPet = async (petId: string) => {
        // const newPets = pets.filter(pet => pet.id !== id);
        // setPets(newPets);
        // startTransition(async () => {
        await deletePet(petId);
        // });
        setSelectedPetId(null);
    };

    const handleAddPet = async (newPet: Omit<Pet, 'id'>) => {
        // setPets(prev => [...prev, { id: crypto.randomUUID(), ...newPet }]);
        setOptimisticPets({ id: crypto.randomUUID(), ...newPet });
        const error = await addPet(newPet);
        if (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            toast.warning(error.error || 'Failed to add pet');
            return;
        }
    };

    const handleEditPet = async (petId: string, newPetData: Omit<Pet, 'id'>) => {
        const error = await editPet(petId || '', newPetData);
        if (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            toast.warning(error.error || 'Failed to edit pet');
            return;
        }
        // setPets(prevState =>
        //     prevState.map(pet => {
        //         if (pet.id === petId) {
        //             return {
        //                 ...pet,
        //                 ...newPetData,
        //             };
        //         }
        //         return pet;
        //     }),
        // );
    };

    const value = {
        pets: optimisticPets,
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
