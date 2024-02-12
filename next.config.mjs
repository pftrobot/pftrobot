/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: 'dist',
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://pftrobot.github.io/pftrobot' : '',
  images: {
    loader: 'imgix',
    path: 'https://pftrobot.github.io/pftrobot',
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    };
  },
  trailingSlash: true,
};
export default nextConfig;
