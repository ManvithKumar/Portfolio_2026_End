/** Re-run enter/exit when scrolling up or down through a section */
export const bidirectionalViewport = {
  once: false,
  amount: 0.35,
} as const

export const bidirectionalViewportInset = {
  once: false,
  amount: 0.35,
  margin: '-80px' as const,
} as const

export const bidirectionalViewportCards = {
  once: false,
  amount: 0.4,
  margin: '-60px' as const,
} as const
