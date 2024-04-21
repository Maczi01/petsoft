import { H1 } from '@/components/h1';
import { ContentBlock } from '@/components/content-block';

export default function Page() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.tailwind file.
     */
    return (
        <main>
            <H1 className="my-8"> Your account</H1>
            <ContentBlock className="flex h-[500px] items-center justify-center">
                <p className="text-center">Welcome to your account</p>
            </ContentBlock>
        </main>
    );
}
