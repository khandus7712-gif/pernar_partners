/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // 도메인 리다이렉트 설정 (선택사항)
  async redirects() {
    return [
      // www 서브도메인을 루트로 리다이렉트
      {
        source: '/www/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

