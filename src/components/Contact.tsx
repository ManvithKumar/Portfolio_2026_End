import { motion } from 'framer-motion'
import { Loader2, Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { sendContactMessage } from '../api/contact'
import { profile } from '../data/portfolio'
import { bidirectionalViewport } from '../motion/viewport'
import { ParallaxSection } from './ParallaxSection'
import styles from './Contact.module.css'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('sending')
    setFeedback('')

    try {
      const result = await sendContactMessage({ name, email, message })
      setFormState('success')
      setFeedback(result.message ?? 'Message sent successfully.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setFormState('error')
      setFeedback(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

  const isSending = formState === 'sending'

  return (
    <ParallaxSection id="contact" variant="dark">
      <div className={styles.wrap}>
        <motion.span
          className={styles.index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={bidirectionalViewport}
        >
          04
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={bidirectionalViewport}
        >
          Let&apos;s build something
        </motion.h2>
        <motion.p
          className={styles.lead}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={bidirectionalViewport}
          transition={{ delay: 0.1 }}
        >
          Open to freelance, full-time, and interesting collaborations.
        </motion.p>

        <motion.a
          href={`mailto:${profile.email}`}
          className={styles.email}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={bidirectionalViewport}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail size={22} />
          {profile.email}
        </motion.a>

        <form className={styles.form} onSubmit={handleSubmit} aria-label="Contact form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSending}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            required
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSending}
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows={4}
            aria-label="Message"
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSending}
          />
          <button type="submit" disabled={isSending}>
            {isSending ? <Loader2 size={18} className={styles.spin} /> : <Send size={18} />}
            {isSending ? 'Sending…' : 'Send message'}
          </button>
          {feedback ? (
            <p
              className={
                formState === 'success' ? styles.formSuccess : styles.formError
              }
              role="status"
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Have a Good Day 🥰 by Manvith Kumar</span>
      </footer>
    </ParallaxSection>
  )
}
