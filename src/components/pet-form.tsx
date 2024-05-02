'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';
import { usePetContext } from '@/lib/hooks';
import { addPet } from '@/actions/actions';

type PetFormProps = {
    actionType: 'add' | 'edit';
    onFormSubmission: () => void;
};

export function PetForm({ actionType, onFormSubmission }: PetFormProps) {
    const { handleAddPet, selectedPet, handleEditPet } = usePetContext();
    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     const pet = {
    //         name: form.get('name') as string,
    //         ownerName: form.get('ownerName') as string,
    //         imageUrl:
    //             (form.get('imageUrl') as string) ||
    //             'https"//bytegrad.com//course-assets/react-nextjs/pet-placeholder.png',
    //         age: +(form.get('age') as string),
    //         notes: form.get('notes') as string,
    //     };
    //     actionType === 'add' ? handleAddPet(pet) : handleEditPet(selectedPet?.id || '', pet);
    //     onFormSubmission();
    // };

    // const handleAddPet = async (e: FormEvent<HTMLFormElement>) => {};
    return (
        <form
            action={async (formData: FormData) => {
                await addPet(formData);
                onFormSubmission();
            }}
            className="flex flex-col"
        >
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Pet name"
                        defaultValue={actionType === 'edit' ? selectedPet?.name : ''}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <Label htmlFor="ownerName">Owner name</Label>
                    <Input
                        id="ownerName"
                        name="ownerName"
                        placeholder="Owner name"
                        required
                        defaultValue={actionType === 'edit' ? selectedPet?.ownerName : ''}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <Label htmlFor="imageUrl">Image url</Label>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="ImageUrl"
                        type="text"
                        defaultValue={actionType === 'edit' ? selectedPet?.imageUrl : ''}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <Label htmlFor="age">Age</Label>
                    <Input
                        id="age"
                        type="number"
                        name="age"
                        placeholder="Age"
                        required
                        defaultValue={actionType === 'edit' ? selectedPet?.age : ''}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Notes"
                        rows={3}
                        required
                        defaultValue={actionType === 'edit' ? selectedPet?.notes : ''}
                    />
                </div>
            </div>

            <Button className="mt-5 self-end" type="submit">
                {actionType === 'add' ? 'Add new pet' : 'Edit Pet'}
            </Button>
        </form>
    );
}
