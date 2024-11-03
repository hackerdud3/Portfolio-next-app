import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdnjs.cloudflare.com"],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
