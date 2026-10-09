import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, '../../'),
  transpilePackages: [
    '@tropical-snow/schema',
    '@tropical-snow/api-client',
    '@tropical-snow/design-tokens',
    '@tropical-snow/ordering-logic',
    '@tropical-snow/ai',
  ],
}

export default nextConfig
