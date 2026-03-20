import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env: {
    // UPDATED: Pointing to your actual backend
    NEXT_PUBLIC_API_URL: "https://api.qwiktalks.com/api",
    NEXT_PUBLIC_API_BASE_URL: "https://api.qwiktalks.com/api",
    NEXT_PUBLIC_STORAGE_URL: "https://api.qwiktalks.com/",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      // ADDED: Allowing your API to serve images
      {
        protocol: "https",
        hostname: "api.qwiktalks.com",
      },
    ],
  },
};

export default nextConfig;