import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { HTMLProps, ReactNode } from 'react';

type PetButton = {
    actionType: 'add' | 'edit' | 'checkout';
    children?: ReactNode;
} & HTMLProps<HTMLButtonElement>;

export const PetButton = ({ actionType, onClick, children }: PetButton) => {
    if (actionType === 'add') {
        return (
            <Button size="icon" onClick={onClick}>
                <PlusIcon className="size-6" />
            </Button>
        );
    }
    if (actionType === 'edit') {
        return <Button variant="secondary">{children}</Button>;
    }
    if (actionType === 'checkout') {
        return <Button variant="secondary">{children}</Button>;
    }
};
