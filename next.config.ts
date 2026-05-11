/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move external packages out of experimental
  serverExternalPackages: ['next/font'],

  // Disable bundle optimization for fonts specifically
  // to prevent the double-declaration bug
  bundlePagesRouterDependencies: true,
}

export default nextConfig
