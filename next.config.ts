import type { NextConfig } from 'next'
import withPlaiceholder from '@plaiceholder/next'

const nextConfig: NextConfig = {
  // 리액트 엄격 모드 활성화
  reactStrictMode: true,

  // 이미지 설정
  images: {
    // 외부 이미지 경로 추가
    remotePatterns: [
      new URL('https://images.pexels.com/**'),
      // ...
    ],
  },

  // ESLint 설정
  eslint: {
    // 빌드 시, 린팅 검사 결과 무시 설정
    // ignoreDuringBuilds: true,
  },

  // TypeScript 설정
  typescript: {
    // 빌드 시, 타입 검사 결과 무시 설정
    // ignoreBuildErrors: true,
  },

  // Turbopack 설정
  turbopack: {},
}

export default withPlaiceholder(nextConfig)
