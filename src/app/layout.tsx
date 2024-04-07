import '../styles/globals.css';
import {Inter} from 'next/font/google';
import getConfig from 'next/config';
import {version} from '../../package.json';

const {publicRuntimeConfig} = getConfig();
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
        <body className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen`}>
        {children}
        <div
            className="flex justify-center bg-slate-400/50 items-center
             absolute rounded-xl right-8 bottom-8 w-112 h-6 p-4 border-black border-2">
            ENV: {nodeEnv}; Version: {version}</div>
        </body>
        </html>
    );
}
