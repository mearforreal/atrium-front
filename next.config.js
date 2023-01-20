/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["sangw.in", "localhost", "picsum.photos"], // <== Domain name
  },
};

module.exports = nextConfig;
