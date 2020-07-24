import {P5Image} from './p5-image'
import {Runnable} from '../types'

export interface P5Sketch {
  // lifecycle
  preload: Runnable                                                           // https://p5js.org/reference/#/p5/preload
  setup: Runnable
  draw: Runnable

  // canvas
  createCanvas: (width: number, height: number) => any
  background: (color: number) => any
  rect: (width: number, height: number, x: number, y: number) => any

  // image
  loadImage: (path: string, successCallback?: (image: P5Image) => any, failureCallback?: (event: any) => any) => P5Image
  image: (imgRef: P5Image, x: number, y: number) => any
}
