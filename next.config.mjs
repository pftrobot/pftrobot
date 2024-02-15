/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  assetPrefix: 'https://pftrobot.github.io/pftrobot',
  images: {
    loader: 'imgix',
    path: '/',
  },
  trailingSlash: true,
};
export default nextConfig;
