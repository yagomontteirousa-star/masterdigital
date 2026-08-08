import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Todas as imagens sao locais (/public), entao nao ha remotePatterns.
    formats: ["image/avif", "image/webp"],
    // Obrigatorio a partir do Next 16: declarar as qualidades usadas.
    qualities: [82],
  },
};

export default nextConfig;
