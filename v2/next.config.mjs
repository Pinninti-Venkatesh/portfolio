/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Archived v1 lives in its own Vercel project (same repo, root directory `v1`)
  // and is proxied in at /v1 so it stays on the apex domain rather than a separate
  // hostname. V1_ORIGIN is set in Vercel's env vars; if it is missing the rewrite is
  // skipped entirely so a misconfigured env cannot take the main site down.
  async rewrites() {
    const origin = process.env.V1_ORIGIN;
    if (!origin) return [];
    return [
      { source: '/v1', destination: `${origin}/v1` },
      { source: '/v1/:path*', destination: `${origin}/v1/:path*` },
    ];
  },
};

export default nextConfig;
