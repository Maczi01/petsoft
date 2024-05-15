'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePetContext } from '@/lib/hooks';
import { addPet } from '@/actions/actions';
import { PetFormButton } from '@/components/pet-form-button';

type PetFormProps = {
    actionType: 'add' | 'edit';
    onFormSubmission: () => void;
};

export function PetForm({ actionType, onFormSubmission }: PetFormProps) {
    const { selectedPet } = usePetContext();

    return (
        <form
            action={async (formData: FormData) => {
                const error = await addPet(formData);
                if (error) {
                    alert(error?.message);
                    return;
                }
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
            <PetFormButton actionType={actionType} />
        </form>
    );
}
