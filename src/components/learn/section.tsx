import type { ComponentProps } from 'react'
import { tw } from '@/utils'

/**
 * 학습 섹션 컴포넌트
 *
 * @example
 * ```tsx
 * // 기본 사용법 (제목은 화면 리더기에만 표시)
 * <LearnSection title="학습 섹션">
 *   <p>학습 콘텐츠가 여기에 들어갑니다.</p>
 * </LearnSection>
 *
 * // 제목을 화면에 표시하는 경우
 * <LearnSection title="학습 섹션" showTitle>
 *   <p>학습 콘텐츠가 여기에 들어갑니다.</p>
 * </LearnSection>
 *
 * // 제목 클래스 속성 전달
 * <LearnSection title="학습 섹션" showTitle headingClassName="text-2xl">
 *   <p>학습 콘텐츠가 여기에 들어갑니다.</p>
 * </LearnSection>
 *
 * // 추가 속성 전달
 * <LearnSection title="학습 섹션" className="bg-gray-100 p-4">
 *   <p>학습 콘텐츠가 여기에 들어갑니다.</p>
 * </LearnSection>
 * ```
 */
export default function LearnSection(props: Props) {
  const {
    title,
    showTitle = false,
    children,
    headingClassName,
    ...restProps
  } = props

  return (
    <section {...restProps}>
      <h1 className={tw([showTitle || 'sr-only'], headingClassName)}>
        {title}
      </h1>
      {children}
    </section>
  )
}

type Props = {
  title: string
  showTitle?: boolean
  headingClassName?: string
} & ComponentProps<'section'>
