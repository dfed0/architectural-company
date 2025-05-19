import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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