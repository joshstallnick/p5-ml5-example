import {NumberSupplier, Runnable} from '../../types'

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
  loadPixels: Runnable
  updatePixels: UpdatePixelsFn
  get: GetFn
  set: (x: number, y: number, a: Alpha) => void
  resize: (width: number, height: number) => void
  copy: CopyFn
  mask: (srcImage: P5Image) => void
  filter: (filterType: FilterType, filterParam?: number) => void                    // https://p5js.org/reference/#/p5.Image/filter (EOP)
  blend: (sx: number, sy: number, sw: number, sh: number,
          dx: number, dy: number, dw: number, dh: number, blendMode: BlendMode, srcImage?: P5Image) => void
  save: (filename: string, extension: 'png' | 'jpg' | 'gif') => void                // https://p5js.org/reference/#/p5.Image/save (EOP)
  reset: Runnable
  getCurrentFrame: NumberSupplier
  setFrame: (index: number) => void
  numFrames: NumberSupplier
  play: Runnable
  pause: Runnable
  delay: (d: number, index?: number) => void
}

export enum FilterType {
  THRESHOLD = 'threshold',
  GRAY = 'gray',
  OPAQUE = 'opaque',
  INVERT = 'invert',
  POSTERIZE = 'posterize',
  BLUR = 'blur',
  ERODE = 'erode',
  DILATE = 'dilate'
}

export enum BlendMode {
  BLEND = 'blend',
  DARKEST = 'darkest',
  LIGHTEST = 'lightest',
  DIFFERENCE = 'difference',
  MULTIPLY = 'multiply',
  EXCLUSION = 'exclusion',
  SCREEN = 'screen',
  REPLACE = 'replace',
  OVERLAY = 'overlay',
  HARD_LIGHT = 'hard_light',
  SOFT_LIGHT = 'soft_light',
  DODGE = 'dodge',
  BURN = 'burn',
  ADD = 'add',
  NORMAL = 'normal'
}

// Number|Number[]|Object: grayscale value | pixel array | a p5.Color | image to copy
type Alpha = number | number[] | P5Image | any

type UpdatePixelsFn = ((x: number, y: number, w: number, h: number) => void) & Runnable

type GetFn = ((x: number, y: number, w: number, h: number) => P5Image) &
  ((x: number, y: number) => P5Image) & Runnable

// srcImage = p5.Image | p5.Element
type CopyFn = ((srcImage: any, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void) &
  ((sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void)
