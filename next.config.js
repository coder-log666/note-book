/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.(md|woff2|html)$/,
      loader: "emit-file-loader",
      options: {
        name: "dist/[path][name].[ext]",
      },
    });
    config.module.rules.push({
      test: /\.(md|woff2|html)$/,
      loader: "raw-loader",
    });
    return config;
  },
};
