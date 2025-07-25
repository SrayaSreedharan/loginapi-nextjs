/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      // Basic redirect
      {
        source: '/admin',
        destination: '/admin/dashboard',
        // permanent: true,
      },
      
    ]
  },
};

export default nextConfig;
