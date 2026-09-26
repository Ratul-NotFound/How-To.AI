import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure scenarios JSON can be read and bundled without issues
  serverExternalPackages: [],
};

export default nextConfig;
