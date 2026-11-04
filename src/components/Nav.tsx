import { motion } from 'framer-motion'
import { navLinks } from '../data/portfolio'
import styles from './Nav.module.css'

export function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={styles.nav}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#hero" className={styles.logo} onClick={(e) => { e.preventDefault(); scrollTo('hero') }}>
        MK<span className={styles.dot}>.</span>
      </a>
      <nav className={styles.links} aria-label="Primary">
        {navLinks.map((link, i) => (
          <motion.button
            key={link.id}
            type="button"
            className={styles.link}
            onClick={() => scrollTo(link.id)}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            {link.label}
          </motion.button>
        ))}
      </nav>
    </motion.header>
  )
}
