/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/WoMOffer',
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/WoMOffer',
  trailingSlash: true,
  distDir: 'dist',
}

module.exports = nextConfig 