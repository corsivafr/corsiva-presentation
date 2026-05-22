import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      { protocol: "https", hostname: "coinmentor.eu", pathname: "/assets/img_corsiva/**" },
    ],
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
