import type { ThemeColors } from 'claude-code'

export type ThemeDef = {
  id: string
  name: string
  description: string
  mode: 'light' | 'dark'
  colors: ThemeColors
  problems: string[]
  /** How the app frosts its panels over the scene. Absent with no scene. */
  glass?: { blur: number; tint?: string; opacity: number }
  /** The SVG a scene draws. Absent for a theme that only changes colors. */
  scene?: string
}

export const THEMES: ThemeDef[]
