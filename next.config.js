/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placebear.com'],
  },
  // Setting up Internationalized Routing
  i18n: {
    locales: ['en-EN', 'es', 'nl-NL'],
    defaultLocale: 'en-EN',
  },
  // Adding Custom Headers, Rewrites, or Redirects:
  // The `/:path*` pattern matches all route
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
        ],
      },
    ];
  },
}


module.exports = nextConfig
