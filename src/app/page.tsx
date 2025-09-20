import type { Metadata } from 'next'
import { LearnSection } from '@/components'
import RandomCountUp from '@/demo'

export const metadata: Metadata = {
  title: 'Next.js 프로젝트 템플릿',
}

export default function HomePage() {
  return (
    <LearnSection
      title="랜덤 카운트 앱"
      className="min-h-screen grid place-content-center"
    >
      <RandomCountUp />
    </LearnSection>
  )
}
