/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig
