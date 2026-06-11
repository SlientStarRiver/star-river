/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/star-river',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
