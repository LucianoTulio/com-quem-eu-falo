/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['fonts.googleapis.com'],
  },
  // Adiciona configurações para garantir que a aplicação funcione em produção
  reactStrictMode: true,
  swcMinify: true,
  // Configura o diretório de build
  distDir: '.next',
  // Configura o diretório de arquivos estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://com-quem-eu-falo.vercel.app' : '',
}

module.exports = nextConfig 