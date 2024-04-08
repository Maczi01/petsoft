import '../styles/globals.css';
import {Inter} from 'next/font/google';
import {version} from '../../package.json';

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Welcome to pet-software',
    description: 'Take care of your pets with pet-software',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const nodeEnv = process.env.NODE_ENV;
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen bg-[#E5E8EC] text-sm text-zinc-900`}>
                {children}
                <div
                    className="w-112 absolute bottom-8 right-8
             flex h-6 items-center justify-center rounded-xl border-2 border-black bg-slate-400/50 p-4"
                >
                    ENV: {nodeEnv}; Version: {version}
                </div>
            </body>
        </html>
    );
}
