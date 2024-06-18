'use client';

import { PlusIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { PetForm } from '@/components/pet-form';
import { ComponentProps, ReactNode, useState } from 'react';
import { flushSync } from 'react-dom';

type PetButtonProps = {
    actionType: 'add' | 'edit' | 'checkout';
    children?: ReactNode;
} & ComponentProps<'button'>;

export const PetButton = ({ actionType, disabled, onClick, children }: PetButtonProps) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    if (actionType === 'checkout') {
        return (
            <Button variant="secondary" disabled={disabled} onClick={onClick}>
                {children}
            </Button>
        );
    }

    return (
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
                {actionType === 'add' ? (
                    <Button size="icon" disabled={disabled}>
                        <PlusIcon className="size-6" />
                    </Button>
                ) : (
                    <Button variant="secondary" disabled={disabled}>
                        {children}
                    </Button>
                )}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{actionType === 'add' ? 'Add a new pet' : 'Edit pet'}</DialogTitle>
                </DialogHeader>

                <PetForm
                    actionType={actionType}
                    onFormSubmission={() => {
                        flushSync(() => {
                            setIsFormOpen(false);
                        });
                    }}
                />
            </DialogContent>
        </Dialog>
    );
};
