/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{repository-name}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{repository-name}' : '',
}

module.exports = nextConfig