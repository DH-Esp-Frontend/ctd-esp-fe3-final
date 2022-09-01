/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dh-frontend.cdn.prismic.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
