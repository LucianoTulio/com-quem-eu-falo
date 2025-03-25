/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fonts.googleapis.com'],
  },
  // Configura o diretório de build
  distDir: '.next',
  // Configura o diretório de arquivos estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://com-quem-eu-falo.vercel.app' : '',
}

module.exports = nextConfig 