import nodemailer from 'nodemailer'
import { isMailConfigured, mailFrom, mailTo, smtp } from './config.js'

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (!isMailConfigured()) {
    return null
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: smtp.auth,
    })
  }
  return transporter
}

export type ContactEmailInput = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(input: ContactEmailInput) {
  const transport = getTransporter()
  if (!transport) {
    throw new Error('Mail is not configured. Add SMTP settings to your .env file.')
  }

  const { name, email, message } = input
  const subject = `Portfolio contact from ${name}`

  await transport.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    text: [`Name: ${name}`, `Email: ${email}`, '', message].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `,
  })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
