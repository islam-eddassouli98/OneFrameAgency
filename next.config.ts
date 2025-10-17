import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Gestione migliore dell'hydration per evitare warning con estensioni browser
  reactStrictMode: true,
};

export default nextConfig;
