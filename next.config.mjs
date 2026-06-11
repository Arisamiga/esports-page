/** @type {import('next').NextConfig} */

const NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  basePath: NEXT_PUBLIC_BASE_PATH || "",
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
