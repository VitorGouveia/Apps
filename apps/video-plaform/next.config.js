const isGithubPages = process.env.GH_PAGES === "true";
console.log(isGithubPages);

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: true,

  assetPrefix: isGithubPages ? "/video-platform/" : "",
  basePath: isGithubPages ? "/video-platform" : "",

  compress: true,
  devIndicators: true,

  swcMinify: true,

  reactStrictMode: true,
};

module.exports = nextConfig;
