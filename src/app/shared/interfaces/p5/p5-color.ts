export interface P5Color {
  toString: (format?: string) => string
  setRed: (red: number) => void
  setGreen: (green: number) => void
  setBlue: (blue: number) => void
  setAlpha: (alpha: number) => void
}

