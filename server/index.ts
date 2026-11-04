import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { isMailConfigured, serverPort } from './config.js'
import { sendContactEmail } from './mail.js'

const app = express()

app.use(cors())
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mailConfigured: isMailConfigured() })
})

app.post('/api/contact', async (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : ''
  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : ''

  if (!name || name.length > 120) {
    res.status(400).json({ error: 'Please enter your name (max 120 characters).' })
    return
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    res.status(400).json({ error: 'Please enter a valid email address.' })
    return
  }
  if (!message || message.length > 5000) {
    res.status(400).json({ error: 'Please enter a message (max 5000 characters).' })
    return
  }

  if (!isMailConfigured()) {
    res.status(503).json({
      error: 'Mail server is not configured yet. Add SMTP variables to .env (see .env.example).',
    })
    return
  }

  try {
    await sendContactEmail({ name, email, message })
    res.json({ ok: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('[contact]', err)
    res.status(500).json({ error: 'Could not send message. Check server logs and SMTP settings.' })
  }
})

app.listen(serverPort, () => {
  console.log(`Contact API listening on http://localhost:${serverPort}`)
  if (!isMailConfigured()) {
    console.warn('SMTP is not fully configured — copy .env.example to .env and add your credentials.')
  }
})
