/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: process.env.NODE_ENV === 'production' ? 'https://pftrobot.github.io/pftrobot' : '/',
  },
  trailingSlash: true,
};
export default nextConfig;
