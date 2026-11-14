import { motion, useScroll, useTransform, type MotionStyle } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/portfolio'
import { bidirectionalViewport, bidirectionalViewportCards } from '../motion/viewport'
import { ParallaxSection } from './ParallaxSection'
import styles from './Projects.module.css'

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60 - index * 8, -40 + index * 8])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4])

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      style={
        {
          y,
          rotateX,
          '--accent': project.accent,
        } as MotionStyle & { '--accent': string }
      }
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={bidirectionalViewportCards}
      transition={{ duration: 0.65, delay: index * 0.08 }}
    >
      <div className={styles.cardGlow} aria-hidden />
      <div className={styles.cardHeader}>
        <span className={styles.year}>{project.year}</span>
        {/* <button type="button" className={styles.cardLink} aria-label={`Open ${project.title}`}>
          <ExternalLink size={18} />
        </button> */}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className={styles.tags}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export function Projects() {
  return (
    <ParallaxSection id="projects" variant="default" showOrbs={false}>
      <div className={styles.header}>
        <motion.span
          className={styles.index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={bidirectionalViewport}
        >
          02
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={bidirectionalViewport}
        >
          Selected work
        </motion.h2>
        <p className={styles.sub}>Engineering scalable solutions, building impactful applications, and turning complex ideas into reliable software.</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </ParallaxSection>
  )
}
