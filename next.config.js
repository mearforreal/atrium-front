/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["sangw.in", "localhost", "picsum.photos","testproject.kz"], // <== Domain name
  },
};

module.exports = nextConfig;
