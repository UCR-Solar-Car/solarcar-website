/** @type {import('next').NextConfig} */

const repo = "change-me-to-your-repo";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,

  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
