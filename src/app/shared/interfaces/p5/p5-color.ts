import {StringSupplier} from '../../types'

export interface P5Color {
  toString: ToStringFn                            // https://p5js.org/reference/#/p5.Color/toString
  setRed: (red: number) => void                   // https://p5js.org/reference/#/p5.Color/setRed
  setGreen: (green: number) => void               // https://p5js.org/reference/#/p5.Color/setGreen
  setBlue: (blue: number) => void                 // https://p5js.org/reference/#/p5.Color/setBlue
  setAlpha: (alpha: number) => void               // https://p5js.org/reference/#/p5.Color/setAlpha
}

type ToStringFn = ((format: string) => string) & StringSupplier
