import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import '@/styles/main.css'

export const metadata: Metadata = {
  title: 'Next.js 프로젝트 템플릿',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko-KR">
      <body className="overflow-y-scroll">
        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}
