/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Tells Turbopack to pass any .yaml or .yml file through yaml-loader
      '*.yaml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
      '*.yml': {
        loaders: ['yaml-loader'],
        as: '*.js',
      },
    },
  },
  reactCompiler: true,
};

export default nextConfig;
