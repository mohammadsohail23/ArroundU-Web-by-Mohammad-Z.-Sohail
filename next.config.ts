import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared hosting
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Image optimization (⚠️ note: Next.js Image Optimization won't work in static export, 
  // you may need to use `next export` friendly image handling or <img> tags instead)
  images: {
    unoptimized: true, // 👈 Add this for static hosting
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
  },

  compress: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
