'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const routes = [
    {
        path: '/app/dashboard',
        label: 'Dashboard',
    },
    {
        path: '/app/account',
        label: 'Account',
    },
];

export const AppHeader = () => {
    const activePathName = usePathname();
    return (
        <header className="flex items-center justify-between border-b border-white/10 py-2">
            <Logo />
            <nav>
                <ul className="flex gap-2 text-xs">
                    {routes.map(route => (
                        <li key={route.path}>
                            <Link
                                href={route.path}
                                className={cn(
                                    'rounded-sm bg-black/10 px-2 py-1 text-white/70 transition ' +
                                        'hover:text-white focus:text-white',
                                    {
                                        'bg-black/10 text-white': activePathName === route.path,
                                    },
                                )}
                            >
                                {route.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
