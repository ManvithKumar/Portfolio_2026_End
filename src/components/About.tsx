import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import { bidirectionalViewport, bidirectionalViewportInset } from '../motion/viewport'
import { ParallaxSection } from './ParallaxSection'
import styles from './About.module.css'

export function About() {
  return (
    <ParallaxSection id="about" variant="dark">
      <div className={styles.layout}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={bidirectionalViewportInset}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.index}>01</span>
          <h2>About</h2>
        </motion.div>

        <motion.div
          className={styles.body}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={bidirectionalViewportInset}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
<p className={styles.lead}>
  I&apos;m a Full Stack Developer with 3 years of experience building
  secure, scalable, and maintainable enterprise applications. I
  specialize in Java, Spring Boot, Angular, and microservices,
  transforming complex business requirements into reliable software
  solutions.
</p>

<p className={styles.text}>
  My work spans backend development, REST API design, frontend
  architecture, database integration, and security implementation.
  I&apos;m passionate about clean code, performance optimization,
  and building systems that are easy to maintain and scale. I
  continuously explore new technologies and engineering practices
  to deliver better software and improve developer experience.
</p>

          <ul className={styles.stats}>
            {profile.stats.map((stat, i) => (
              <motion.li
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={bidirectionalViewport}
                transition={{ delay: 0.15 * i }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
