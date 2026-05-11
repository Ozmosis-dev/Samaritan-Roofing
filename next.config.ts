import type { NextConfig } from "next";

const HERO_IMAGE_URL = encodeURIComponent(
  '/images/roof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg'
)

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  compress: true,
  output: 'standalone',
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
    minimumCacheTTL: 2678400,
    deviceSizes: [390, 768, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    remotePatterns: [],
  },
  async headers() {
    return [
      // Security headers on every route
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Font preload + cache on every route
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value: [
              '</fonts/microextendflf-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin',
              '</fonts/microextendflf-bold-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin',
            ].join(", "),
          },
        ],
      },
      // LCP hero image preload on homepage only
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: [
              `</_next/image?url=${HERO_IMAGE_URL}&w=1920&q=80>; rel=preload; as=image; imagesrcset="/_next/image?url=${HERO_IMAGE_URL}&w=390&q=80 390w, /_next/image?url=${HERO_IMAGE_URL}&w=768&q=80 768w, /_next/image?url=${HERO_IMAGE_URL}&w=1080&q=80 1080w, /_next/image?url=${HERO_IMAGE_URL}&w=1200&q=80 1200w, /_next/image?url=${HERO_IMAGE_URL}&w=1920&q=80 1920w"; imagesizes="100vw"`,
            ].join(", "),
          },
        ],
      },
      // Long-lived cache for fonts
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Long-lived cache for static images
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
