/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'pl'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) notFound();

    return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        messages: (await import(`../messages/${locale}.json`)).default,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    };
});
