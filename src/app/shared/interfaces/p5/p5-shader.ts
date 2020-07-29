import {P5Sketch} from './p5-sketch'

export interface P5Shader {
  renderer: P5Sketch
  vertSrc: string
  fragSrc: string

  setUniform: (uniformName: string, data: object | number | boolean | number[]) => void
}
