import {P5Image} from './p5-image'
import {Runnable} from '../../types'
import {P5Color} from './p5-color'
import {P5Element} from './p5-element'

/**
 * Structured to the documentation on the site
 *
 * https://p5js.org/reference/
 */
export interface P5Sketch {

  // color
  // creating & reading
  alpha: ColorStandardFn                                                      // https://p5js.org/reference/#/p5/alpha
  blue: ColorStandardFn                                                       // https://p5js.org/reference/#/p5/blue
  brightness: ColorStandardFn                                                 // https://p5js.org/reference/#/p5/brightness
  color: ColorFn                                                              // https://p5js.org/reference/#/p5/color
  green: ColorStandardFn                                                      // https://p5js.org/reference/#/p5/green
  hue: ColorStandardFn                                                        // https://p5js.org/reference/#/p5/hue
  lerpColor: (c1: P5Color, c2: P5Color, amp: number) => P5Color               // https://p5js.org/reference/#/p5/lerpColor
  lightness: ColorStandardFn                                                  // https://p5js.org/reference/#/p5/lightness
  red: ColorStandardFn                                                        // https://p5js.org/reference/#/p5/red
  saturation: ColorStandardFn                                                 // https://p5js.org/reference/#/p5/saturation

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
  ellipse: EllipseFn                                                          // https://p5js.org/reference/#/p5/ellipse
  rect: RectFn                                                                // https://p5js.org/reference/#/p5/rect

  // image
  // loading & displaying
  loadImage: LoadImageFn                                                      // https://p5js.org/reference/#/p5/loadImage
  image: ImageFn                                                              // https://p5js.org/reference/#/p5/image
}

export enum RendererType {
  P2D = 'P2D',
  WEBGL = 'WEBGL'
}

type ColorStandardFn = (color: P5Color | number[] | string) => number

type ColorFn =
  ((gray: number) => P5Color) &
  ((gray: number, alpha: number) => P5Color) &
  ((v1: number, v2: number, v3: number) => P5Color) &
  ((v1: number, v2: number, v3: number, alpha: number) => P5Color) &
  ((value: string) => P5Color) &
  ((values: number[]) => P5Color) &
  ((color: P5Color) => P5Color)

type BackgroundFn =
  ((color: P5Color) => void) &
  ((colorString: string) => void) & ((colorString: string, a: number) => void) &
  ((gray: number) => void) & ((gray: number, a: number) => void) &
  ((v1: number, v2: number, v3: number) => void) & ((v1: number, v2: number, v3: number, a: number) => void) &
  ((values: number[]) => void) &
  ((image: P5Image) => void) & ((image: P5Image, a: number) => void)

// returns renderer
type CreateCanvasFn = ((width: number, height: number) => any) & ((width: number, height: number, renderer: RendererType) => any)

type EllipseFn =
  ((x: number, y: number, w: number) => void) &
  ((x: number, y: number, w: number, h: number) => void) &
  ((x: number, y: number, w: number, h: number, detail: number) => void)

type RectFn =
  ((x: number, y: number, w: number) => void) &
  ((x: number, y: number, w: number, h: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, tr: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, tr: number, br: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, tr: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, br: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, tl: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, tr: number) => void) &
  ((x: number, y: number, w: number, h: number, tr: number, br: number) => void) &
  ((x: number, y: number, w: number, h: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, tr: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, br: number) => void) &
  ((x: number, y: number, w: number, h: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, bl: number) => void) &
  ((x: number, y: number, w: number, tl: number) => void) &
  ((x: number, y: number, w: number, tl: number, tr: number) => void) &
  ((x: number, y: number, w: number, tl: number, tr: number, br: number) => void) &
  ((x: number, y: number, w: number, tl: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, tl: number, tr: number, bl: number) => void) &
  ((x: number, y: number, w: number, tl: number, br: number) => void) &
  ((x: number, y: number, w: number, tl: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, tl: number, bl: number) => void) &
  ((x: number, y: number, w: number, tr: number, br: number) => void) &
  ((x: number, y: number, w: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, tr: number, bl: number) => void) &
  ((x: number, y: number, w: number, br: number) => void) &
  ((x: number, y: number, w: number, br: number, bl: number) => void) &
  ((x: number, y: number, w: number, bl: number) => void) &
  ((x: number, y: number, w: number, h: number, detailX: number) => void) &
  ((x: number, y: number, w: number, h: number, detailX: number, detailY: number) => void) &
  ((x: number, y: number, w: number, h: number, detailY: number) => void)


type LoadImageFn =
  ((path: string) => P5Image) &
  ((path: string, successCallback: (img: P5Image) => void) => P5Image) &
  ((path: string, successCallback: (img: P5Image) => void, failureCallback: (event: Event) => void) => P5Image) &
  ((path: string, failureCallback: (event: Event) => void) => P5Image)


type Image = P5Image | P5Element

type ImageFn =
  ((img: Image, x: number, y: number) => void) &
  ((img: Image, x: number, y: number, width: number) => void) &
  ((img: Image, x: number, y: number, width: number, height: number) => void) &
  ((img: Image, x: number, y: number, height: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sHeight: number) => void)
