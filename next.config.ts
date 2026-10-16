import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/mapa',
        destination: '/test',
        permanent: false,
      },
      {
        source: '/punto',
        destination: '/test',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;