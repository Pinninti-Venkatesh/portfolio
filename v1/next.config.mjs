import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    // v1 is archived behind iamvenkatesh.in/v1. basePath moves every route and every
    // /_next/* asset under that prefix, so the apex deployment can proxy the whole
    // app with one rewrite instead of leaking asset requests to the root.
    basePath: '/v1',
};

export default withNextIntl(withMDX(nextConfig));