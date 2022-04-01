// @ts-check
const withPlugins = require("next-compose-plugins");

const withPWA = require("next-pwa");

const PWAPlugin = withPWA({
  pwa: {
    dest: "public",
    mode: "production", // forces to generate worker box
    disable: process.env.NODE_ENV === "development",
  },
});

const isGithubPages = process.env.GH_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,

  assetPrefix: isGithubPages ? "/video-platform/" : "",
  basePath: isGithubPages ? "/video-platform" : "",

  compress: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "top-right",
  },

  experimental: {
    runtime: "nodejs",
    serverComponents: true,
  },

  swcMinify: true,

  reactStrictMode: true,
};

module.exports = withPlugins([PWAPlugin], nextConfig);
