import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath:  "/me",
  assetPrefix: "/me",
};

export default nextConfig;
