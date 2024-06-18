'use client';

import Image from 'next/image';
import { usePetContext } from '@/lib/hooks';
import { Pet } from '@/lib/types';
import { PetButton } from '@/components/pet-button';
import { useTransition } from 'react';

const EmptyView = () => {
    return (
        <div className="flex size-full items-center justify-center">
            <h2 className="text-3xl font-semibold">No pet selected</h2>
        </div>
    );
};

const TopBar = ({ pet }: { pet: Pet }) => {
    const { handleCheckoutPet } = usePetContext();
    const [isPending] = useTransition();
    return (
        <div className="flex items-center border-b border-light bg-white px-8 py-5">
            <Image
                src={pet?.imageUrl || ''}
                alt="Pet image"
                width={75}
                height={75}
                className="size-[75px] rounded-full object-cover"
            />
            <h2 className="ml-5 text-3xl font-semibold leading-7">{pet?.name || 'Select a pet'}</h2>
            <div className="ml-auto space-x-2">
                <PetButton actionType="edit"> Edit</PetButton>
                <PetButton
                    actionType="checkout"
                    disabled={isPending}
                    onClick={async () => await handleCheckoutPet(pet.id)}
                >
                    Checkout
                </PetButton>
            </div>
        </div>
    );
};

const OtherInfo = ({ selectedPet }: { selectedPet: Pet | undefined }) => {
    return (
        <div className="flex justify-around px-5 py-10 text-center">
            <div className="">
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Owner name</h3>
                <p className="mt-1 text-lg text-zinc-800">{selectedPet?.ownerName}</p>
            </div>
            <div className="">
                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
                <p className="mt-1 text-lg text-zinc-800">{selectedPet?.age}</p>
            </div>
        </div>
    );
};

const Notes = ({ pet }: { pet: Pet | undefined }) => {
    return (
        <section className="mx-8 mb-9 flex-1 rounded-md border-b border-light bg-white px-7 py-5">
            {pet?.notes}
        </section>
    );
};
export const PetDetails = () => {
    const { selectedPet } = usePetContext();

    return (
        <section className=" flex size-full flex-col">
            {!selectedPet ? (
                <EmptyView />
            ) : (
                <>
                    <TopBar pet={selectedPet} />
                    <OtherInfo selectedPet={selectedPet} />
                    <Notes pet={selectedPet}></Notes>
                </>
            )}
        </section>
    );
};
