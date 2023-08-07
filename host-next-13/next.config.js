const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            mf1: "mf1@http://localhost:8081/remoteEntry.js",
          },
        }),
      );
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: '/remote/:slug',
        destination: '/remote',
        permanent: true,
      }
    ]
  }
};
