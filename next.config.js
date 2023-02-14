/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images:{
    domains: ['http2.mlstatic.com']
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_API_BASE_URL
  }
}

module.exports = nextConfig
