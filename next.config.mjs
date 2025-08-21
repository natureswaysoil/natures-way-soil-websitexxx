/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: { allowedOrigins: ['*'] },
  },
  // If you later use next/image with remote images, uncomment and set domains:
  // images: {
  //   remotePatterns: [
  //     { protocol: 'https', hostname: '**' }
  //   ]
  // }
};
export default nextConfig;
