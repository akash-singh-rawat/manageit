/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "diligent-toucan-213.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
