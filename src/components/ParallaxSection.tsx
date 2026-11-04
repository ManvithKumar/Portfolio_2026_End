import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useParallaxTransforms, useSectionParallax } from '../hooks/useParallax'
import styles from './ParallaxSection.module.css'

type ParallaxSectionProps = {
  id: string
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'accent'
  showOrbs?: boolean
}

export function ParallaxSection({
  id,
  children,
  className = '',
  variant = 'default',
  showOrbs = true,
}: ParallaxSectionProps) {
  const { ref, scrollYProgress } = useSectionParallax()
  const { backgroundY, foregroundY, opacity, scale, rotate } = useParallaxTransforms(scrollYProgress)

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${styles[variant]} ${className}`}
    >
      {showOrbs && (
        <motion.div
          className={styles.orbs}
          style={{ y: backgroundY, opacity }}
          aria-hidden
        >
          <span className={styles.orb1} />
          <span className={styles.orb2} />
          <span className={styles.orb3} />
        </motion.div>
      )}
      <motion.div className={styles.content} style={{ y: foregroundY, scale, rotate }}>
        {children}
      </motion.div>
    </section>
  )
}
