export type HeroThemeColor = 'primary' | 'secondary' | 'white'

export const heroIconColors: Record<HeroThemeColor, string> = {
  primary: 'var(--accent)',
  secondary: 'var(--accent-secondary)',
  white: '#ffffff',
}
