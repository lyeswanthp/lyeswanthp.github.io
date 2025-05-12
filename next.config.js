/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  // Important: Define the correct asset prefix for GitHub Pages
  assetPrefix: '/lyeswanthp.github.io/', // Replace with your actual repo name
  basePath: '/lyeswanthp.github.io', // Replace with your actual repo name
  trailingSlash: true
}

module.exports = nextConfig