/** @type {import('next').NextConfig} */

const NODE_ENV = process.env.NODE_ENV || "";

const nextConfig = {
  basePath: NODE_ENV === "production" ? "/esports-page" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      // Tells Turbopack to pass any .yaml or .yml file through yaml-loader
      "*.yaml": {
        loaders: ["yaml-loader"],
        as: "*.js",
      },
      "*.yml": {
        loaders: ["yaml-loader"],
        as: "*.js",
      },
    },
  },
  reactCompiler: true,
};

export default nextConfig;
