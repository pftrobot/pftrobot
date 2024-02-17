/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    loader: 'imgix',
    path: '/',
  },
  trailingSlash: true,
};
export default nextConfig;
