'use client';

import Image from 'next/image';
import { usePetContext } from '@/lib/hooks';
import { Pet } from '@/lib/types';

export const PetDetails = () => {
    const { selectedPet } = usePetContext();

    return (
        <section className=' flex flex-col size-full'>
            {!selectedPet ? (
                    <EmptyView />) :
                (<>
                    <TopBar pet={selectedPet} />
                    <OtherInfo selectedPet={selectedPet} />
                    <Notes pet={selectedPet}></Notes>
                </>)

            }
        </section>
    );
};

const EmptyView = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <h2 className='text-3xl font-semibold'>No pet selected</h2>
        </div>
    );
};

const TopBar = ({ pet }: { pet: Pet | undefined }) => {
    return (
        <div className='flex items-center bg-white px-8 py-5 border-b border-black/[0.08]'>
            <Image
                src={pet?.imageUrl || ''}
                alt='Pet image'
                width={75}
                height={75}
                className='h-[75px] w-[75px] rounded-full object-cover'
            />
            <h2 className='text-3xl font-semibold leading-7 ml-5'>
                {pet?.name || 'Select a pet'}
            </h2>
        </div>

    );
};

const OtherInfo = ({ selectedPet }: { selectedPet: Pet | undefined }) => {
    return (
        <div className='flex justify-around px-5 py-10 text-center'>
            <div className=''>
                <h3 className='text-[13px] font-medium uppercase text-zinc-700'>Owner name</h3>
                <p className='mt-1 text-lg text-zinc-800'>{selectedPet?.ownerName}</p>
            </div>
            <div className=''>
                <h3 className='text-[13px] font-medium uppercase text-zinc-700'>Age</h3>
                <p className='mt-1 text-lg text-zinc-800'>{selectedPet?.age}</p>
            </div>
        </div>
    );
};

const Notes = ({ pet }: { pet: Pet | undefined }) => {
    return (
        <section className='flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border-b border-black/[0.08]'>
            {pet?.notes}
        </section>
    );
};
