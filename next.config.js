const { Configuration } = require('webpack');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      browserslist: require.resolve('browserslist'),
    };
    return config;
  },
};
