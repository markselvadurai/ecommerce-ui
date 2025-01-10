import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint checks during builds
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cdn.shopify.com'], // Add the Shopify CDN domain
  },
};

export default nextConfig;
