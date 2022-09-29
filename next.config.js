/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://instagram.com/thehatefulsociety",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/hatefulsociety",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/thehatefulsociety",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
