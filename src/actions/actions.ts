'use server';

// export const addPet = async (pet: Omit<Pet, 'id'>) => {

import { revalidatePath } from 'next/cache';
import { sleep } from '@/lib/utils';
import { Pet } from '@/lib/types';

export const addPet = async (pet: Omit<Pet, 'id'>) => {
    await sleep(2000);
    try {
        await prisma?.pet.create({
            data: pet,
        });
    } catch (error) {
        return { error: 'Failed to add pet' };
    }
    revalidatePath('/en/app', 'layout');
};

export const editPet = async (petId: string, pet: Omit<Pet, 'id'>) => {
    await sleep(2000);
    try {
        await prisma?.pet.update({
            where: {
                id: petId,
            },
            data: pet,
        });
    } catch (error) {
        return { error: 'Failed to add pet' };
    }
    revalidatePath('/en/app', 'layout');
};

export const deletePet = async (petId: string) => {
    try {
        await prisma?.pet.delete({
            where: {
                id: petId,
            },
        });
    } catch (error) {
        return { error: 'Failed to add pet' };
    }
    revalidatePath('/en/app', 'layout');
};
