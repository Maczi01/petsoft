import MDX from '@next/mdx';
import createNextIntlPlugin from "next-intl/plugin";

const withMdx = MDX();
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'dist',

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bytegrad.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
        unoptimized: true,
        // distDir: 'dist',

    },
    experimental: {
        typedRoutes: false,
    },
};

export default withNextIntl(withMdx(nextConfig));
