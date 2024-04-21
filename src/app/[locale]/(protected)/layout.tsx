import { BackgroundPattern } from '@/components/background-pattern';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { PetContextProvider } from '@/context/pet-context-provider';
import { Pet } from '@/lib/types';
import { SearchContextProvider } from '@/context/search-context-provider';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const response = await fetch('https://bytegrad.com/course-assets/projects/petsoft/api/pets');

    if (!response.ok) {
        throw Error('Failed to fetch pets');
    }
    const petsData = (await response.json()) as Pet[];
    return (
        <div>
            <BackgroundPattern />
            <div className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4">
                <AppHeader />
                <SearchContextProvider>
                    <PetContextProvider data={petsData}>{children}</PetContextProvider>
                </SearchContextProvider>
                <AppFooter />
            </div>
        </div>
    );
}
