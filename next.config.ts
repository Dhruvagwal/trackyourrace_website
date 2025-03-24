import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

export default nextConfig;
