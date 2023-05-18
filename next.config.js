/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placebear.com'],
  },
  // Every page in the pages directory becomes a serverless function (lambda)
  target: 'serverless',
  env: {
    LOCAL: process.env.LOCAL,
    PORT: process.env.PORT,
  },
  // Custom Serverless Function Configuration
  serverlessFunctionInputs: (inputs, nextConfig, serverlessConfig) => {
    // Do something
    console.log('serverlessFunctionInputs', inputs, nextConfig, serverlessConfig)
    return inputs;  // Make sure to return inputs
  },
  // Setting up Internationalized Routing
  i18n: {
    locales: ['en-EN', 'fr', 'nl-NL'],
    defaultLocale: 'en-EN',
  },
  // Adding Custom Headers, Rewrites, or Redirects:
  // The /:path* pattern matches all route
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
