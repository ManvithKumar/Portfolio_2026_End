import type { HeroThemeColor } from '../data/heroIconColors'
import { heroIconColors } from '../data/heroIconColors'
import styles from './ThemedSvgIcon.module.css'

type ThemedSvgIconProps = {
  src: string
  color: HeroThemeColor
  className?: string
  alt?: string
}

export function ThemedSvgIcon({ src, color, className = '', alt = '' }: ThemedSvgIconProps) {
  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{
        backgroundColor: heroIconColors[color],
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={!alt}
    />
  )
}
