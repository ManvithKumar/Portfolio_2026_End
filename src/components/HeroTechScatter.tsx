import { motion, useTransform, type MotionValue } from 'framer-motion'
import { heroScatterTech } from '../data/heroTechIcons'
import { ThemedSvgIcon } from './ThemedSvgIcon'
import styles from './HeroTechScatter.module.css'

type HeroTechScatterProps = {
  scrollYProgress: MotionValue<number>
  opacity: MotionValue<number>
}

function ScatterItem({
  icon,
  scrollYProgress,
  opacity,
}: {
  icon: (typeof heroScatterTech)[number]
  scrollYProgress: MotionValue<number>
  opacity: MotionValue<number>
}) {
  const y = useTransform(scrollYProgress, [0, 1], icon.yRange)
  const rotate = useTransform(scrollYProgress, [0, 1], icon.rotateRange)

  return (
    <motion.div
      className={styles.scatter}
      style={{
        top: icon.top,
        left: icon.left,
        right: icon.right,
        width: icon.size,
        height: icon.size,
        y,
        rotate,
        opacity,
      }}
      aria-hidden={!icon.alt}
    >
      {icon.color ? (
        <ThemedSvgIcon src={icon.src} color={icon.color} alt={icon.alt} />
      ) : (
        <img className={styles.native} src={icon.src} alt={icon.alt} draggable={false} />
      )}
    </motion.div>
  )
}

export function HeroTechScatter({ scrollYProgress, opacity }: HeroTechScatterProps) {
  return (
    <div className={styles.layer} aria-hidden>
      {heroScatterTech.map((icon) => (
        <ScatterItem
          key={icon.id}
          icon={icon}
          scrollYProgress={scrollYProgress}
          opacity={opacity}
        />
      ))}
    </div>
  )
}
