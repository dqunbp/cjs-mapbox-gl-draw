const isProd = process.env.NODE_ENV === "production";

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: isProd ? "/cjs-mapbox-gl-draw/" : "",
  // basePath: isProd ? "/cjs-mapbox-gl-draw" : "",
};
