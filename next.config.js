const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
      },
    ],
  ],
  nextConfig,
);
