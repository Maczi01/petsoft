import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppHeader } from '../components/app-header';

// Mock usePathname hook
// vitest.mock('next/navigation', () => ({
//     usePathname: jest.fn(() => '/mocked-path'),
// }));

describe('AppHeader', () => {
    it('renders without crashing', () => {
        render(<AppHeader />);
        expect(screen.getByRole('header')).toBeInTheDocument();
    });

    it('displays correct route links', () => {
        render(<AppHeader />);
        expect(screen.getByText('Dashwboard')).toBeInTheDocument();
        expect(screen.getByText('Account')).toBeInTheDocument();
    });
    //
    // it('highlights active route', () => {
    //     render(<AppHeader />);
    //     expect(screen.getByText('Dashboard')).toHaveClass('bg-black/10 text-white');
    //     expect(screen.getByText('Account')).not.toHaveClass('bg-black/10 text-white');
    // });
});
