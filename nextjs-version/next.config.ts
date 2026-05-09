import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "shadcn-dashboard";

const nextConfig: NextConfig = {
  // GitHub Pages 向け静的エクスポート
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // 静的エクスポートでは画像最適化を無効化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
