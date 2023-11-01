/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/home',
        },
        {
          source: '/',
          destination: '/home?tab=plan',
          missing: [
            {
              type: 'query',
              key: 'tab',
            },
          ],
        },
        {
          source: '/home',
          destination: '/home?tab=plan',
          missing: [
            {
              type: 'query',
              key: 'tab',
            },
          ],
        },
      ],
    };
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
