/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://pftrobot.github.io/pftrobot' : '',
  images: {
    loader: 'imgix',
    path: '/',
  },
  trailingSlash: true,
};
export default nextConfig;
