import { NextConfig } from 'next';

// Use Next.js types to type the config parameter
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      browserslist: require.resolve('browserslist'),
    };
    return config;
  },
};

export default nextConfig;
