/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  // For a username.github.io repository, these should be empty:
  assetPrefix: '',
  basePath: '',
  trailingSlash: true
}

module.exports = nextConfig