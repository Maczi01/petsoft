import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the extended matchers like .toBeInTheDocument()
import { Branding } from '@/components/branding';

describe('Branding Component', () => {

    test('renders the H1 component with correct text', () => {
        render(<Branding />);
        const h1Element = screen.getByRole('heading', { level: 1 });
        expect(h1Element).toHaveTextContent('Pet Soft');
    });

    test('paragraph contains correct class and text', () => {
        render(<Branding />);
        const paragraphElement = screen.getByText('Manage your pets with ease', { selector: 'p' });
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement).toHaveClass('text-lg opacity-80');
    });
});
