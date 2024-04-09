import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../../../components/Logo';
import { Button } from '../../../components/ui/button';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
    const t = await getTranslations('Marketing');

    return (
        <main
            className="flex min-h-screen items-center justify-center gap-10
     bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%
     to-emerald-500 to-90% xl:flex-row"
        >
            <Image
                src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
                alt="Preview of PetSoft"
                width={519}
                height={472}
            />
            <div>
                <Logo />
                <h1 className="my-6 max-w-[500px] text-5xl font-semibold">
                    Manage your <span className="font-extrabold">pet</span> day care with ease
                </h1>
                <p className="max-w-[600px] text-2xl font-medium">
                    {t('description')}
                    {/*Use Petsoft to easily keep track of you pets. Get lifetime access for $299*/}
                </p>
                <div className="mt-10 space-x-3">
                    <Button asChild>
                        <Link href="/signup">Get started</Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="/login">Log in</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
