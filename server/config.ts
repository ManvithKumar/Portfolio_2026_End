/** Fill these via `.env` — see `.env.example` */

export const serverPort = Number(process.env.PORT ?? 3001)

export const smtp = {
  host: process.env.SMTP_HOST ?? '',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER ?? '',
    pass: process.env.SMTP_PASS ?? '',
  },
}

/** Address that receives contact form submissions */
export const mailTo = process.env.MAIL_TO ?? ''

/** From header (often same as SMTP_USER for Gmail, etc.) */
export const mailFrom = process.env.MAIL_FROM ?? process.env.SMTP_USER ?? ''

export function isMailConfigured(): boolean {
  return Boolean(smtp.host && smtp.auth.user && smtp.auth.pass && mailTo && mailFrom)
}
