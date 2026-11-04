import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { bidirectionalViewport } from '../motion/viewport'
import { ParallaxSection } from './ParallaxSection'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <ParallaxSection id="skills" variant="accent">
      <div className={styles.wrap}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={bidirectionalViewport}
        >
          <span className={styles.index}>03</span>
          <h2>Skills & tools</h2>
          <p>From crafting intuitive frontends to engineering robust backends — equipped with the tools to build, scale, and deliver production-ready software.</p>
        </motion.div>

        <ul className={styles.list}>
          {skills.map((skill, i) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={bidirectionalViewport}
              transition={{ delay: i * 0.06 }}
            >
              <div className={styles.row}>
                <span>{skill.name}</span>
                <span className={styles.pct}>{skill.level}%</span>
              </div>
              <div className={styles.track}>
                <motion.div
                  className={styles.fill}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.level / 100 }}
                  viewport={bidirectionalViewport}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </ParallaxSection>
  )
}
