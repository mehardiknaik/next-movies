/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: ["image.tmdb.org"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
