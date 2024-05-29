'use server';

// export const addPet = async (pet: Omit<Pet, 'id'>) => {

import { revalidatePath } from 'next/cache';
import { sleep } from '@/lib/utils';

export const addPet = async (formData: FormData) => {
    await sleep(2000);
    try {
        await prisma?.pet.create({
            data: {
                name: formData.get('name') as string,
                ownerName: formData.get('ownerName') as string,
                age: parseInt(formData.get('age') as string),
                notes: formData.get('notes') as string,
                imageUrl:
                    (formData.get('imageUrl') as string) ||
                    'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
            },
        });
    } catch (error) {
        return { error: 'Failed to add pet' };
    }
    revalidatePath('/en/app', 'layout');
};

export const editPet = async (petId: string, formData: FormData) => {
    await sleep(2000);
    try {
        await prisma?.pet.update({
            where: {
                id: petId,
            },
            data: {
                name: formData.get('name') as string,
                ownerName: formData.get('ownerName') as string,
                age: parseInt(formData.get('age') as string),
                notes: formData.get('notes') as string,
                imageUrl:
                    (formData.get('imageUrl') as string) ||
                    'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
            },
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
