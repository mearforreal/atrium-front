/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["sangw.in", "localhost", "picsum.photos", "testproject.kz"], // <== Domain name
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
