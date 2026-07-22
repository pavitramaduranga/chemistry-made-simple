import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/chemistry-made-simple" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/chemistry-made-simple/" : undefined,
};

export default nextConfig;
