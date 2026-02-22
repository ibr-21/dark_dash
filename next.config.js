/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
