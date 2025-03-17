/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/WoMOffer',
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/WoMOffer/',
  trailingSlash: true,
  distDir: 'out'
}

module.exports = nextConfig 