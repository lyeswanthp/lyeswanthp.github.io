/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  // For a project page (username.github.io/project-name):
  // If your repository is named "lyeswanthp.github.io", and it's a user site,
  // you should use empty strings for both:
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
