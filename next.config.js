const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export',
  // For username.github.io repos, these should be empty:
  assetPrefix: '',
  basePath: '',
  trailingSlash: true
}