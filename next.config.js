/** @type {import('next').NextConfig} */

const repo = "solarcar-website";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,

  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
