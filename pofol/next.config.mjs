/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'dist',
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    };
  },
  trailingSlash: true,
};
export default nextConfig;
