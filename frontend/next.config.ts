import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // Webpack fallback configuration (for production builds)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },

  // ✅ STABLE TOP-LEVEL KEY (Next.js 16+)
  turbopack: {
    rules: {
      '*.glb': {
        type: 'asset',
      },
      '*.gltf': {
        type: 'asset',
      },
      '*.mp4': {
        type: 'asset',
      },
    },
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
