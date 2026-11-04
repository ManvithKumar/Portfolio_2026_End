export type ContactPayload = {
  name: string
  email: string
  message: string
}

const apiBase = import.meta.env.VITE_API_URL ?? ''

export async function sendContactMessage(payload: ContactPayload) {
  const res = await fetch(`${apiBase}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await res.json().catch(() => ({}))) as { error?: string; message?: string }

  if (!res.ok) {
    throw new Error(data.error ?? 'Failed to send message.')
  }

  return data
}
