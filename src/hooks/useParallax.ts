import {
  useScroll,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from 'framer-motion'
import { useRef } from 'react'

export function useSectionParallax(
  offset: UseScrollOptions['offset'] = ['start end', 'end start'],
) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })
  return { ref, scrollYProgress }
}

export function useParallaxTransforms(scrollYProgress: MotionValue<number>) {
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const foregroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96])
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])

  return { backgroundY, foregroundY, opacity, scale, rotate }
}
