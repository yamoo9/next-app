import Image, { type ImageProps } from 'next/image'
import { getImage, tw } from '@/utils'

/**
 * 동적 이미지 로드 컴포넌트
 *
 * @example
 * ```tsx
 * // 기본 사용법
 * <DynamicImage src="/images/example.jpg" alt="Example image" />
 *
 * // 클래스 추가
 * <DynamicImage
 *   src="/images/example.jpg"
 *   alt="Example image"
 *   className="rounded-lg shadow-md"
 * />
 *
 * // Next/Image 속성 추가
 * <DynamicImage
 *   src="/images/example.jpg"
 *   alt="Example image"
 *   priority
 *   quality={90}
 * />
 * ```
 */
export default async function DynamicImage({
  src,
  alt,
  className,
  ...restProps
}: Props) {
  const { base64, imageProps } = await getImage(src)

  return (
    <div className={tw('relative', className)}>
      <Image
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...imageProps}
        {...restProps}
      />
    </div>
  )
}

type Props = Omit<ImageProps, 'src' | 'alt'> & {
  src: string
  alt: string
  className?: string
}
