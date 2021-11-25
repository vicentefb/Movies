module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: ["image.tmdb.org"], // to optimze the images that come from this domain
    path: "/_next/image",
    loader: "default",
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};
