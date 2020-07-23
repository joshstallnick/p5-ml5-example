/**
 * https://p5js.org/reference/#/p5.Image
 *
 * EOP = Error on Page
 */
export interface P5Image {
  width: number
  height: number
  pixels: any[]
  canvas: any
  drawingContext: any
  gifProperties: any
  modified: boolean
  _modified: boolean
  _pixelDensity: number
  _pixelsState: any

  // fns
  loadPixels: Runnable                                                            // https://p5js.org/reference/#/p5.Image/loadPixels
  updatePixels: UpdatePixelsFn                                                      // https://p5js.org/reference/#/p5.Image/updatePixels
  get: GetFn                                                                        // https://p5js.org/reference/#/p5.Image/get
  set: (x: number, y: number, a: Alpha) => void                                     // https://p5js.org/reference/#/p5.Image/set
  resize: (width: number, height: number) => void                                   // https://p5js.org/reference/#/p5.Image/resize
  copy: CopyFn                                                                      // https://p5js.org/reference/#/p5.Image/copy
  mask: (srcImage: P5Image) => void                                                 // https://p5js.org/reference/#/p5.Image/mask
  filter: FilterFn                                                                  // https://p5js.org/reference/#/p5.Image/filter (EOP)
  blend: BlendFn                                                                    // https://p5js.org/reference/#/p5.Image/blend
  save: (filename: string, extension: 'png' | 'jpg' | 'gif') => void                // https://p5js.org/reference/#/p5.Image/save (EOP)
  reset: Runnable                                                                   // https://p5js.org/reference/#/p5.Image/reset
  getCurrentFrame: NumberSupplier                                                   // https://p5js.org/reference/#/p5.Image/getCurrentFrame
  setFrame: (index: number) => void                                                 // https://p5js.org/reference/#/p5.Image/setFrame
  numFrames: NumberSupplier                                                         // https://p5js.org/reference/#/p5.Image/numFrames
  play: Runnable                                                                    // https://p5js.org/reference/#/p5.Image/play
  pause: Runnable                                                                   // https://p5js.org/reference/#/p5.Image/pause
  delay: DelayFn                                                                    // https://p5js.org/reference/#/p5.Image/delay
}

enum FilterType {
  THRESHOLD = 'THRESHOLD',
  GRAY = 'GRAY',
  OPAQUE = 'OPAQUE',
  INVERT = 'INVERT',
  POSTERIZE = 'POSTERIZE',
  BLUR = 'BLUR',
  ERODE = 'ERODE',
  DILATE = 'DILATE'
}

enum BlendMode {
  BLEND = 'BLEND',
  DARKEST = 'DARKEST',
  LIGHTEST = 'LIGHTEST',
  DIFFERENCE = 'DIFFERENCE',
  MULTIPLY = 'MULTIPLY',
  EXCLUSION = 'EXCLUSION',
  SCREEN = 'SCREEN',
  REPLACE = 'REPLACE',
  OVERLAY = 'OVERLAY',
  HARD_LIGHT = 'HARD_LIGHT',
  SOFT_LIGHT = 'SOFT_LIGHT',
  DODGE = 'DODGE',
  BURN = 'BURN',
  ADD = 'ADD',
  NORMAL = 'NORMAL'
}

// Number|Number[]|Object: grayscale value | pixel array | a p5.Color | image to copy
type Alpha = number | number[] | P5Image | any

type Runnable = () => void

type Supplier<T> = () => T

type NumberSupplier = () => number

type UpdatePixelsFn = ((x: number, y: number, w: number, h: number) => void) | (Runnable)

type GetFn = ((x: number, y: number, w: number, h: number) => P5Image) |
             ((x: number, y: number) => P5Image) | (Runnable)

// srcImage = p5.Image | p5.Element
type CopyFn = ((srcImage: any, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void) |
                             ((sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void)

type FilterFn = ((filterType: FilterType) => void) | ((filterType: FilterType, filterParam: number) => void)

type BlendFn =
  ((srcImage: P5Image,
    sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: BlendMode) => void) |
  ((sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: BlendMode) => void)

type DelayFn = ((d: number) => void) | ((d: number, index: number) => void)
