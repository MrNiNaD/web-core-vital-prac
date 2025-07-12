import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/images/:all*", // adjust path as needed
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
  legacyBrowsers: false,
  transpilePackages: [], // don't transpile everything unless needed
};

export default nextConfig;
