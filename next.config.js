/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placebear.com'],
  },
  target: 'serverless',
}


module.exports = nextConfig
