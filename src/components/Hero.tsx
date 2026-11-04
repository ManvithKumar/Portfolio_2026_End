import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Code2, Globe } from 'lucide-react'
import { useRef } from 'react'
import { heroFeaturedTech } from '../data/heroTechIcons'
import { profile } from '../data/portfolio'
import { HeroTechScatter } from './HeroTechScatter'
import { ThemedSvgIcon } from './ThemedSvgIcon'
import styles from './Hero.module.css'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  const eyebrowX = useTransform(scrollYProgress, [0, 0.12], [0, -28])
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const firstNameY = useTransform(scrollYProgress, [0, 0.16], ['0%', '110%'])
  const lastNameY = useTransform(scrollYProgress, [0, 0.2], ['0%', '110%'])
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const taglineY = useTransform(scrollYProgress, [0, 0.18], [0, 16])
  const actionsOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0])
  const actionsY = useTransform(scrollYProgress, [0, 0.22], [0, 24])

  const javaY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const nodeY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const javaRotate = useTransform(scrollYProgress, [0, 1], [-6, 14])
  const nodeRotate = useTransform(scrollYProgress, [0, 1], [6, -12])
  const iconOpacity = useTransform(scrollYProgress, [0, 0.55], [0.42, 0.12])
  const scatterOpacity = useTransform(scrollYProgress, [0, 0.55], [0.5, 0.08])

  return (
    <section ref={ref} id="hero" className={styles.hero}>
      <motion.div className={styles.grid} style={{ y: gridY }} aria-hidden />
      <motion.div
        className={styles.ring}
        style={{ rotate: ringRotate, opacity: fade }}
        aria-hidden
      />

      <HeroTechScatter scrollYProgress={scrollYProgress} opacity={scatterOpacity} />

      <motion.div
        className={`${styles.techSide} ${styles.techLeft}`}
        style={{ y: javaY, rotate: javaRotate, opacity: iconOpacity }}
        aria-hidden
      >
        <ThemedSvgIcon
          src={heroFeaturedTech.java.src}
          color={heroFeaturedTech.java.color}
          className={styles.techIcon}
        />
      </motion.div>

      <motion.div
        className={`${styles.techSide} ${styles.techRight}`}
        style={{ y: nodeY, rotate: nodeRotate, opacity: iconOpacity }}
        aria-hidden
      >
        <ThemedSvgIcon
          src={heroFeaturedTech.node.src}
          color={heroFeaturedTech.node.color}
          className={styles.techIcon}
        />
      </motion.div>

      <motion.div className={styles.inner} style={{ opacity: fade }}>
        <motion.p
          className={styles.eyebrow}
          style={{ x: eyebrowX, opacity: eyebrowOpacity }}
        >
          {profile.location}
        </motion.p>

        <motion.h1 className={styles.title} style={{ y: titleY }}>
          <span className={styles.line}>
            <motion.span style={{ y: firstNameY }}>{profile.name.split(' ')[0]}</motion.span>
          </span>
          <span className={`${styles.line} ${styles.accent}`}>
            <motion.span style={{ y: lastNameY }}>{profile.name.split(' ')[1]}</motion.span>
          </span>
        </motion.h1>

        <motion.p className={styles.role} style={{ y: subtitleY }}>
          {profile.role}
        </motion.p>
        <motion.p className={styles.tagline} style={{ opacity: taglineOpacity, y: taglineY }}>
          {profile.tagline}
        </motion.p>

        <motion.div
          className={styles.actions}
          style={{ opacity: actionsOpacity, y: actionsY }}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View work
          </a>
          <a href={profile.social.github} className={styles.iconBtn} aria-label="GitHub">
            <Code2 size={20} />
          </a>
          <a href={profile.social.linkedin} className={styles.iconBtn} aria-label="LinkedIn">
            <Globe size={20} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className={styles.scrollHint}
        style={{ opacity: fade }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
