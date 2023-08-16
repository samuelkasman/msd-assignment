/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'antd',
    '@ant-design/charts',
    '@ant-design/cssinjs',
    '@ant-design/icons',
  ],
}

module.exports = nextConfig
