import {P5Image} from './p5-image'
import {Runnable} from '../../types'
import {P5Color} from './p5-color'

/**
 * Structured to the documentation on the site
 *
 * https://p5js.org/reference/
 */
export interface P5Sketch {

  // color
  // setting
  background: BackgroundFn                                                    // https://p5js.org/reference/#/p5/background

  // structure
  preload: Runnable                                                           // https://p5js.org/reference/#/p5/preload
  setup: Runnable                                                             // https://p5js.org/reference/#/p5/setup
  draw: Runnable                                                              // https://p5js.org/reference/#/p5/draw

  // rendering
  createCanvas: CreateCanvasFn                                                // https://p5js.org/reference/#/p5/createCanvas

  // shape
  // 2d primitives
  rect: (width: number, height: number, x: number, y: number) => any

  // image
  // loading & displaying
  loadImage: (path: string, successCallback?: (image: P5Image) => any, failureCallback?: (event: any) => any) => P5Image
  image: (imgRef: P5Image, x: number, y: number) => any
}

export enum RendererType {
  P2D = 'P2D',
  WEBGL = 'WEBGL'
}

type BackgroundFn =
  ((color: P5Color) => void) |
  ((colorString: string) => void) | ((colorString: string, a: number) => void) |
  ((gray: number) => void) | ((gray: number, a: number) => void) |
  ((v1: number, v2: number, v3: number) => void) | ((v1: number, v2: number, v3: number, a: number) => void) |
  ((values: number[]) => void) |
  ((image: P5Image) => void) | ((image: P5Image, a: number) => void)

// returns renderer
type CreateCanvasFn = ((width: number, height: number) => any) | ((width: number, height: number, renderer: RendererType) => any)
