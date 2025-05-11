/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  // For a user/organization site (username.github.io), use empty strings
  assetPrefix: '',
  basePath: '',
  // This ensures links work properly with GitHub Pages
  trailingSlash: true
}

module.exports = nextConfig
