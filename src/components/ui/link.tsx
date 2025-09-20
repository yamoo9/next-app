'use client'

import { type ComponentProps, type ReactNode, useState } from 'react'
import NextLink from 'next/link'

/**
 * 링크 컴포넌트
 *
 * @example
 * ```tsx
 * // 기본 사용법
 * <Link href="/products">상품 목록</Link>
 *
 * // 접근 가능한 레이블 지정
 * <Link href="/contact" aria-label="서비스 문의">?</Link>
 *
 * // 활성 페이지 상태 설정
 * <Link href="/" aria-current="page">홈</Link>
 * ```
 */
export default function Link({ href, children, ...props }: Props) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <NextLink
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
      {...props}
    >
      {children}
    </NextLink>
  )
}

type Props = ComponentProps<typeof NextLink> & {
  href: string
  children: ReactNode
  'aria-label'?: string
  'aria-current'?:
    | 'false'
    | 'true'
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | boolean
    | undefined
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-disabled'?: boolean | 'true' | 'false'
  'aria-hidden'?: boolean | 'true' | 'false'
}
