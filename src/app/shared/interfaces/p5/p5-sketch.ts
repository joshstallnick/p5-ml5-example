import {P5Image} from './p5-image'
import {Runnable} from '../../types'
import {P5Color} from './p5-color'
import {P5Element} from './p5-element'
import {P5Renderer} from './p5-renderer'
import {P5Vector} from './p5-vector'

/**
 * Structured to the documentation on the site
 *
 * https://p5js.org/reference/
 */
export interface P5Sketch {

  // COLOR
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
  clear: Runnable                                                             // https://p5js.org/reference/#/p5/clear
  colorMode: ColorModeFn                                                      // https://p5js.org/reference/#/p5/colorMode
  fill: ColorOptionsFn                                                        // https://p5js.org/reference/#/p5/fill
  noStroke: Runnable                                                          // https://p5js.org/reference/#/p5/noStroke
  stroke: ColorOptionsFn                                                      // https://p5js.org/reference/#/p5/stroke
  erase: EraseFn                                                              // https://p5js.org/reference/#/p5/erase
  noErase: Runnable                                                           // https://p5js.org/reference/#/p5/noErase


  // SHAPE
  // 2d primitives
  arc: ArcFn                                                                  // https://p5js.org/reference/#/p5/arc
  ellipse: EllipseFn                                                          // https://p5js.org/reference/#/p5/ellipse
  circle: (x: number, y: number, d: number) => void                           // https://p5js.org/reference/#/p5/circle
  line: LineFn                                                                // https://p5js.org/reference/#/p5/line
  point: PointFn                                                              // https://p5js.org/reference/#/p5/point
  quad: QuadBezierFn                                                                // https://p5js.org/reference/#/p5/quad
  rect: RectFn                                                                // https://p5js.org/reference/#/p5/rect
  square: SquareFn                                                            // https://p5js.org/reference/#/p5/square
  triangle: (x1: number, y1: number,                                          // https://p5js.org/reference/#/p5/triangle
             x2: number, y2: number,
             x3: number, y3: number) => void

  // attributes
  ellipseMode: (mode: LocationMode) => void                                   // https://p5js.org/reference/#/p5/ellipseMode
  noSmooth: Runnable                                                          // https://p5js.org/reference/#/p5/noSmooth
  rectMode: (mode: LocationMode) => void                                      // https://p5js.org/reference/#/p5/rectMode
  smooth: Runnable                                                            // https://p5js.org/reference/#/p5/smooth
  strokeCap: (cap: CapType) => void                                           // https://p5js.org/reference/#/p5/strokeCap
  strokeJoin: (join: JointType) => void                                       // https://p5js.org/reference/#/p5/strokeJoin
  strokeWeight: (weight: number) => void                                      // https://p5js.org/reference/#/p5/strokeWeight

  // curves
  bezier: QuadBezierFn                                                        // https://p5js.org/reference/#/p5/bezier
  bezierDetail: (detail: number) => void                                      // https://p5js.org/reference/#/p5/bezierDetail
  bezierPoint: BezierOptionsFn                                                // https://p5js.org/reference/#/p5/bezierPoint
  bezierTangent: BezierOptionsFn                                              // https://p5js.org/reference/#/p5/bezierTangent
  curve: QuadBezierFn                                                         // https://p5js.org/reference/#/p5/curve
  curveDetail: (resolution: number) => void                                   // https://p5js.org/reference/#/p5/curveDetail
  curveTightness: (amount: number) => void                                    // https://p5js.org/reference/#/p5/curveTightness
  curvePoint: BezierOptionsFn                                                 // https://p5js.org/reference/#/p5/curvePoint
  curveTangent: BezierOptionsFn                                               // https://p5js.org/reference/#/p5/curveTangent

  // vertex
  beginContour: Runnable                                                      // https://p5js.org/reference/#/p5/beginContour
  beginShape: BeginShapeFn                                                    // https://p5js.org/reference/#/p5/beginShape
  bezierVertex: BezierVertexFn                                                // https://p5js.org/reference/#/p5/bezierVertex
  curveVertexFn: CurveVertexFn                                                // https://p5js.org/reference/#/p5/curveVertex
  endContour: Runnable                                                        // https://p5js.org/reference/#/p5/endContour
  endShape: EndShapeFn                                                        // https://p5js.org/reference/#/p5/endShape
  quadraticVertex: QuadraticVertexFn                                          // https://p5js.org/reference/#/p5/quadraticVertext
  vertex: VertexFn                                                            // https://p5js.org/reference/#/p5/vertex


  // structure
  preload: Runnable                                                           // https://p5js.org/reference/#/p5/preload
  setup: Runnable                                                             // https://p5js.org/reference/#/p5/setup
  draw: Runnable                                                              // https://p5js.org/reference/#/p5/draw

  // rendering
  createCanvas: CreateCanvasFn                                                // https://p5js.org/reference/#/p5/createCanvas



  // image
  // loading & displaying
  loadImage: LoadImageFn                                                      // https://p5js.org/reference/#/p5/loadImage
  image: ImageFn                                                              // https://p5js.org/reference/#/p5/image
}

export enum RendererType {
  P2D = 'P2D',
  WEBGL = 'WEBGL'
}

type QuadBezierFn =
  ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) => void) &
  ((
    x1: number, y1: number, z1: number,
    x2: number, y2: number, z2: number,
    x3: number, y3: number, z3: number,
    x4: number, y4: number, z4: number) => void)

// SHAPE

// creating & reading fns
type ColorStandardFn = (color: P5Color | number[] | string) => number

type ColorFn =
  ((gray: number) => P5Color) &
  ((gray: number, alpha: number) => P5Color) &
  ((v1: number, v2: number, v3: number) => P5Color) &
  ((v1: number, v2: number, v3: number, alpha: number) => P5Color) &
  ((value: string) => P5Color) &
  ((values: number[]) => P5Color) &
  ((color: P5Color) => P5Color)


// setting fns
type BackgroundFn =
  ((color: P5Color) => void) &
  ((colorString: string) => void) & ((colorString: string, a: number) => void) &
  ((gray: number) => void) & ((gray: number, a: number) => void) &
  ((v1: number, v2: number, v3: number) => void) & ((v1: number, v2: number, v3: number, a: number) => void) &
  ((values: number[]) => void) &
  ((image: P5Image) => void) & ((image: P5Image, a: number) => void)

export enum ColorMode {
  RGB = 'RGB',
  HSB = 'HSB',
  HSL = 'HSL'
}

type ColorModeFn =
  ((mode: ColorMode) => void) &
  ((mode: ColorMode, max: number) => void) &
  ((mode: ColorMode, max1: number) => void) &
  ((mode: ColorMode, max1: number, max2: number) => void) &
  ((mode: ColorMode, max1: number, max2: number, max3: number) => void) &
  ((mode: ColorMode, max1: number, max2: number, max3: number, maxA: number) => void)

type ColorOptionsFn =
  ((v1: number, v2: number, v3: number) => void) &
  ((v1: number, v2: number, v3: number, alpha: number) => void) &
  ((value: string) => void) &
  ((gray: number) => void) &
  ((gray: number, alpha: number) => void) &
  ((values: number[]) => void) &
  ((color: P5Color) => void)

type EraseFn =
  ((strengthFill: number) => void) &
  ((strengthFill: number, strengthStroke: number) => void) &
  ((strengthStroke: number) => void)


type CreateCanvasFn = ((width: number, height: number) => any) & ((width: number, height: number, renderer: RendererType) => P5Renderer)


// SHAPE

// 2d primitives
export enum ArchMode {
  CHORD = 'CHORD',
  PIE = 'PIE',
  OPEN = 'OPEN'
}

type ArcFn =
  ((x: number, y: number, w: number, h: number, start: number, stop: number) => void) &
  ((x: number, y: number, w: number, h: number, start: number, stop: number, mode: ArchMode) => void) &
  ((x: number, y: number, w: number, h: number, start: number, stop: number, mode: ArchMode, detail: number) => void) &
  ((x: number, y: number, w: number, h: number, start: number, stop: number, detail: number) => void)


type EllipseFn =
  ((x: number, y: number, w: number) => void) &
  ((x: number, y: number, w: number, h: number) => void) &
  ((x: number, y: number, w: number, h: number, detail: number) => void)

type LineFn =
  ((x1: number, y1: number, x2: number, y2: number) => void) &
  ((x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => void)

type PointFn =
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void) &
  ((coordinateVector: P5Vector) => void)

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

type SquareFn =
  ((x: number, y: number, s: number) => void) &
  ((x: number, y: number, s: number, tl: number) => void) &
  ((x: number, y: number, s: number, tl: number, tr: number) => void) &
  ((x: number, y: number, s: number, tl: number, tr: number, br: number) => void) &
  ((x: number, y: number, s: number, tl: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, s: number, tl: number, tr: number, bl: number) => void) &
  ((x: number, y: number, s: number, tl: number, br: number) => void) &
  ((x: number, y: number, s: number, tl: number, br: number, bl: number) => void) &
  ((x: number, y: number, s: number, tl: number, bl: number) => void) &
  ((x: number, y: number, s: number, tr: number) => void) &
  ((x: number, y: number, s: number, tr: number, br: number) => void) &
  ((x: number, y: number, s: number, tr: number, br: number, bl: number) => void) &
  ((x: number, y: number, s: number, tr: number, bl: number) => void) &
  ((x: number, y: number, s: number, br: number) => void) &
  ((x: number, y: number, s: number, br: number, bl: number) => void) &
  ((x: number, y: number, s: number, bl: number) => void)

// attributes
export enum LocationMode {
  CENTER = 'CENTER',
  RADIUS = 'RADIUS',
  CORNER = 'CORNER',
  CORNERS = 'CORNERS'
}

export enum CapType {
  ROUND = 'ROUND',
  SQUARE = 'SQUARE',
  PROJECT = 'PROJECT'
}

export enum JointType {
  MITER = 'MITER',
  BEVEL = 'BEVEL',
  ROUND = 'ROUND'
}

// curves
type BezierOptionsFn = (a: number, b: number, c: number, d: number, t: number) => number

// vertex
export enum ShapeKind {
  POINTS = 'POINTS',
  LINES = 'LINES',
  TRIANGLES = 'TRIANGLES',
  TRIANGLE_FAN = 'TRIANGLE_FAN',
  TRIANGLE_STRIP = 'TRIANGLE_STRIP',
  QUADS = 'QUADS',
  QUAD_STRIP = 'QUAD_STRIP',
  TESS = 'TESS'
}

type BeginShapeFn = ((kind: ShapeKind) => void) & Runnable

type BezierVertexFn =
  ((x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) => void) &
  ((x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number) => void)

type CurveVertexFn =
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void)

type EndShapeFn = ((mode: 'CLOSE') => void) & Runnable

type QuadraticVertexFn =
  ((cx: number, cy: number, x3: number, y3: number) => void) &
  ((cx: number, cy: number, x3: number, y3: number, z3: number) => void)

type VertexFn =
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void) &
  ((x: number, y: number, z: number, u: number) => void) &
  ((x: number, y: number, z: number, u: number, v: number) => void) &
  ((x: number, y: number, z: number, v: number) => void)



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
