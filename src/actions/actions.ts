'use server';

// export const addPet = async (pet: Omit<Pet, 'id'>) => {

import { revalidatePath } from 'next/cache';

export const addPet = async (formData: FormData) => {
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
    revalidatePath('/en/app', 'layout');
};
