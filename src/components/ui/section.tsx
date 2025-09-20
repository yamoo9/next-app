import type { ComponentProps } from 'react'
import { tw } from '@/utils'

type Props = ComponentProps<'section'> & {
  title: string
}

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
export default function Section({
  title,
  children,
  className,
  ...restProps
}: Props) {
  return (
    <section
      className={tw(
        'container mx-auto p-5 flex flex-col gap-y-2 items-start',
        className
      )}
      {...restProps}
    >
      <h1 className="text-3xl font-light">{title}</h1>
      {children}
    </section>
  )
}
