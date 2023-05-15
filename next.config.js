/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placebear.com'],
  },
  env: {
    LOCAL: process.env.LOCAL,
    PORT: process.env.PORT,
  },
}


module.exports = nextConfig
