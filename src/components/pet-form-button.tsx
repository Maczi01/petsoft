'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type PetFormButtonProps = {
    actionType: 'add' | 'edit';
};

export function PetFormButton({ actionType }: PetFormButtonProps) {
    const { pending } = useFormStatus();
    return (
        <Button className="mt-5 self-end" type="submit" disabled={pending}>
            {actionType === 'add' ? 'Add new pet' : 'Edit Pet'}
        </Button>
    );
}
