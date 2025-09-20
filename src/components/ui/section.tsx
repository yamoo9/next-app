import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title: string
}>

/**
 * 섹션 콘텐츠 블록 컴포넌트
 *
 * @example
 * ```tsx
 * <Section title="섹션 제목">
 *   <p>섹션 내용이 여기에 들어갑니다.</p>
 * </Section>
 * ```
 */
export default function Section({ title, children }: Props) {
  return (
    <section className="container mx-auto p-5 flex flex-col gap-y-2 items-start">
      <h1 className="text-3xl font-light">{title}</h1>
      {children}
    </section>
  )
}
