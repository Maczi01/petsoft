'use client';

import { createContext, ReactNode, useOptimistic, useState } from 'react';
import { Pet, PetEssentials } from '@/lib/types';
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
    handleCheckoutPet: (id: Pet['id']) => void;
    handleAddPet: (pet: Omit<Pet, 'id'>) => void;
    handleEditPet: (petId: string, pet: Omit<Pet, 'id'>) => void;
};

export const PetContext = createContext<TPetContext | null>(null);

export const PetContextProvider = ({ data: pets, children }: PetContextProvider) => {
    const [optimisticPets, setOptimisticPets] = useOptimistic(
        pets,
        (state, { action, payload }) => {
            switch (action) {
                case 'add':
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return [...state, { ...payload, id: Math.random().toString() }];
                case 'edit':
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    return state.map(pet => {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                        if (pet.id === payload.id) {
                            // eslint-disable-next-line max-len
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
                            return { ...pet, ...payload.newPetData };
                        }
                        return pet;
                    });
                case 'delete':
                    return state.filter(pet => pet.id !== payload);
                default:
                    return state;
            }
        },
    );
    const [, setPets] = useState(pets);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
    const selectedPet = optimisticPets.find(pet => pet.id === selectedPetId);
    const numberOfPets = optimisticPets.length;
    const handleChangeSelectedPetId = (id: string) => {
        setSelectedPetId(id);
    };

    const handleAddPet = async (newPet: PetEssentials) => {
        setOptimisticPets({ action: 'add', payload: newPet });
        const error = await addPet(newPet);
        if (error) {
            toast.warning(error.error);
            return;
        }
    };
    const handleEditPet = async (petId: Pet['id'], newPetData: PetEssentials) => {
        setOptimisticPets({ action: 'edit', payload: { id: petId, newPetData } });
        const error = await editPet(petId, newPetData);
        if (error) {
            toast.warning(error.error);
            return;
        }
    };
    const handleCheckoutPet = async (petId: Pet['id']) => {
        setOptimisticPets({ action: 'delete', payload: petId });
        const error = await deletePet(petId);
        if (error) {
            toast.warning(error.error);
            return;
        }
        setSelectedPetId(null);
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
