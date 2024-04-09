import MDX from '@next/mdx';
import createNextIntlPlugin from "next-intl/plugin";

const withMdx = MDX();
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bytegrad.com',
            },
        ],
    },
    experimental: {
        typedRoutes: false,
    },
};

export default withNextIntl(withMdx(nextConfig));
