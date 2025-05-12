/** @type {import('next').NextConfig} */
const repoName = 'lyeswanthp.github.io'; // Replace with your GitHub repository name

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  trailingSlash: true
}

module.exports = nextConfig