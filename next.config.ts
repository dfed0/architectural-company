import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'drive.google.com',
      'docs.google.com',
      'pcijqmimlorjjwretheb.supabase.co',
    ],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pcijqmimlorjjwretheb.supabase.co',
        pathname: '/storage/v1/object/public/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/projects/:project',
        destination: '/gallery-of-:project',
      },
    ]
  },
}

export default nextConfig
