/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/en",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
