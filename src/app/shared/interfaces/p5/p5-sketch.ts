import {BlendMode, FilterType, P5Image} from './p5-image'
import {AnyFunction, BooleanSupplier, NumberSupplier, ObjectSupplier, Runnable, StringArraySupplier, StringSupplier} from '../../types'
import {P5Color} from './p5-color'
import {P5Element} from './p5-element'
import {P5Renderer} from './p5-renderer'
import {P5Vector} from './p5-vector'
import {P5Geometry} from './p5-geometry'
import {P5MediaElement} from './p5-media-element'
import {P5Graphics} from './p5-graphics'
import {P5StringDict} from './p5-string-dict'
import {P5NumberDict} from './p5-number-dict'

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

  // 3d primitives
  plane: PlaneConsumer                                                        // https://p5js.org/reference/#/p5/plane
  box: BoxConsumer                                                            // https://p5js.org/reference/#/p5/box
  sphere: SphereConsumer                                                      // https://p5js.org/reference/#/p5/sphere
  cylinder: CylinderConsumer                                                  // https://p5js.org/reference/#/p5/cylinder
  cone: ConeConsumer                                                          // https://p5js.org/reference/#/p5/cone
  ellipsoid: EllipsoidConsumer                                                // https://p5js.org/reference/#/p5/ellipsoid
  torus: TorusConsumer                                                        // https://p5js.org/reference/#/p5/torus

  // 3d models
  loadModel: LoadModelFn                                                      // https://p5js.org/reference/#/p5/loadModel
  model: (model: P5Geometry) => void                                          // https://p5js.org/reference/#/p5/model


  // ENVIRONMENT
  frameCount: number                                                          // https://p5js.org/reference/#/p5/frameCount
  deltaTime: number                                                           // https://p5js.org/reference/#/p5/deltaTime
  focused: boolean                                                            // https://p5js.org/reference/#/p5/focused
  displayWidth: number                                                        // https://p5js.org/reference/#/p5/displayWidth
  displayHeight: number                                                       // https://p5js.org/reference/#/p5/displayHeight
  windowWidth: number                                                         // https://p5js.org/reference/#/p5/windowWidth
  windowHeight: number                                                        // https://p5js.org/reference/#/p5/windowHeight
  width: number                                                               // https://p5js.org/reference/#/p5/width
  height: number                                                              // https://p5js.org/reference/#/p5/height

  print: (contents: any) => void                                              // https://p5js.org/reference/#/p5/print
  cursor: CursorConsumer                                                      // https://p5js.org/reference/#/p5/cursor
  frameRate: FrameRateConsumer                                                // https://p5js.org/reference/#/p5/frameRate
  noCursor: Runnable                                                          // https://p5js.org/reference/#/p5/noCursor
  windowResized: Runnable                                                     // https://p5js.org/reference/#/p5/windowResized
  fullscreen: FullscreenFn                                                    // https://p5js.org/reference/#/p5/fullscreen
  pixelDensity: PixelDensityConsumer                                          // https://p5js.org/reference/#/p5/pixelDensity
  displayDensity: NumberSupplier                                              // https://p5js.org/reference/#/p5/displayDensity
  getURL: StringSupplier                                                      // https://p5js.org/reference/#/p5/getURL
  getURLPath: StringArraySupplier                                             // https://p5js.org/reference/#/p5/getURLPath
  getURLParams: ObjectSupplier                                                // https://p5js.org/reference/#/p5/getURLParams


  // STRUCTURE
  displayFriendlyErrors: boolean                                              // https://p5js.org/reference/#/p5/displayFriendlyErrors

  preload: Runnable                                                           // https://p5js.org/reference/#/p5/preload
  setup: Runnable                                                             // https://p5js.org/reference/#/p5/setup
  draw: Runnable                                                              // https://p5js.org/reference/#/p5/draw
  remove: Runnable                                                            // https://p5js.org/reference/#/p5/remove
  noLoop: Runnable                                                            // https://p5js.org/reference/#/p5/noLoop
  loop: Runnable                                                              // https://p5js.org/reference/#/p5/loop
  isLooping: BooleanSupplier                                                  // https://p5js.org/reference/#/p5/isLooping
  push: Runnable                                                              // https://p5js.org/reference/#/p5/push
  pop: Runnable                                                               // https://p5js.org/reference/#/p5/pop
  redraw: RedrawFn                                                            // https://p5js.org/reference/#/p5/redraw
  p5: (sketch: P5Sketch, node: string | Node) => any                          // https://p5js.org/reference/#/p5/p5


  // DOM
  select: SelectFn
  selectAll: SelectAllFn
  removeElements: Runnable
  changed: AnyFunction | boolean
  input: AnyFunction | boolean
  createDiv: CreateGenericElementFn
  createP: CreateGenericElementFn
  createSpan: CreateGenericElementFn
  createImg: CreateGenericElementFn
  createA: CreateGenericElementFn
  createSlider: CreateSliderFn
  createButton: CreateButtonFn
  createCheckbox: CreateCheckboxFn
  createSelect: CreateSelectFn
  createRadio: CreateRadioFn
  createColorPicker: CreateColorPickerFn
  createInput: CreateInputFn
  createFileInput: CreateFileInputFn
  createVideo: CreateVideoFn
  createAudioFn: CreateAudioFn
  createCapture: CreateCaptureFn
  createElement: CreateElementFn


  // RENDERING
  drawingContext: any

  createCanvas: CreateCanvasFn                                                // https://p5js.org/reference/#/p5/createCanvas
  resizeCanvas: ResizeCanvasConsumer
  noCanvas: Runnable
  createGraphics: CreateGraphicsFn
  blendMode: (mode: BlendMode) => void
  setAttributes: SetAttributeConsumer


  // TRANSFORM
  applyMatrix: (a: number, b: number, c: number,
                d: number, e: number, f: number) => void
  resetMatrix: Runnable
  rotate: RotateConsumer
  rotateX: AngleConsumer
  rotateY: AngleConsumer
  rotateZ: AngleConsumer
  scale: ScaleConsumer
  shearX: AngleConsumer
  shearY: AngleConsumer
  translate: TranslateConsumer


  // DATA

  // local storage
  storeItem: (key: string, value: LocalStorageItem) => void
  getItem: (key: string) => LocalStorageItem
  clearStorage: Runnable
  removeItem: (key: string) => void

  // dictionary
  createStringDict: CreateDictFn<string, P5StringDict>
  createNumberDict: CreateDictFn<number, P5NumberDict>

  // array functions -- leaving out deprecated fns
  arrayCopy: ArrayCopyConsumer
  concat: (a: any[], b: any[]) => any[]
  shuffle: ArrayShuffleFn

  // conversion
  float: (str: string) => number
  int: IntConversionFn
  str: (n: string | boolean | number | any[]) => string
  boolean: (item: any) => boolean
  byte: ByteConversionFn
  char: CharConversionFn
  unchar: StringNumConversionFn
  hex: HexConversionFn
  unhex: StringNumConversionFn

  // string functions
  join: (list: any[], separator: string) => string
  match: (str: string, regexp: string) => string[]
  matchAll: (str: string, regexp: string) => string[]                   // says 2d array so they mean string[][] no?
  nf: NumberFormatFn
  nfc: NumberFormatCommaFn
  nfp: NumberFormatFn
  nfs: NumberFormatFn
  split: (value: string, delim: string) => string[]
  splitTokens: SplitTokensFn
  trim: TrimFn


  // EVENTS
  // acceleration
  deviceOrientation?: 'LANDSCAPE' | 'PORTRAIT'
  accelerationX: number
  accelerationY: number
  accelerationZ: number
  pAccelerationX: number
  pAccelerationY: number
  pAccelerationZ: number
  rotationX: number
  rotationY: number
  rotationZ: number
  pRotationX: number
  pRotationY: number
  pRotationZ: number
  turnAxis: boolean

  setMoveThreshold: (value: number) => void
  setShakeThreshold: (value: number) => void
  deviceMoved: Runnable
  deviceTurned: Runnable
  deviceShaken: Runnable

  // keyboard
  keyIsPressed: boolean
  key: any
  keyCode: KeyCode

  keyPressed: Runnable
  keyReleased: Runnable
  KeyTyped: Runnable
  keyIsDown: (code: number | KeyCode) => boolean

  // mouse
  movedX: number
  movedY: number
  mouseX: number
  mouseY: number
  pmouseX: number
  pmouseY: number
  winMouseX: number
  winMouseY: number
  pwinMouseX: number
  pwinMouseY: number
  mouseButton: 'LEFT' | 'RIGHT' | 'CENTER'
  mouseIsPressed: boolean
  mouseMoved: EventConsumer
  mouseDragged: EventConsumer
  mousePressed: EventConsumer
  mouseReleased: EventConsumer
  mouseClicked: EventConsumer
  doubleClicked: EventConsumer
  mouseWheel: EventConsumer
  requestPointerLock: Runnable
  exitPointerLock: Runnable

  // touch
  touches?: any[]
  touchStarted: EventConsumer
  touchMoved: EventConsumer
  touchEnded: EventConsumer


  // IMAGE
  createImage: (width: number, height: number) => P5Image
  saveCanvas: SaveCanvasConsumer
  saveFrame: SaveFramesConsumer

  // loading & displaying
  loadImage: LoadImageFn
  image: ImageConsumer
  tint: TintConsumer
  noTint: Runnable
  imageMode: (mode: ImageMode) => void

  // pixels
  pixels: any
  blend: BlendConsumer
  copy: CopyConsumer
  filter: FilterConsumer
  get: ImageGetFn
  loadPixels: Runnable
  set: (x: number, y: number, c: number | number[] | P5Color | P5Image) => void
  updatePixels: UpdatePixelsConsumer
}

export enum RendererType {
  P2D = 'P2D',
  WEBGL = 'WEBGL'
}

type NumberOrString = number | string
type ArrayOfNumberOrString = number[] | string[]

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


// 3d primitives
type PlaneConsumer =
  ((width: number) => void) &
  ((width: number, height: number) => void) &
  ((width: number, height: number, detailX: number) => void) &
  ((width: number, height: number, detailX: number, detailY: number) => void) &
  ((width: number, height: number, detailY: number) => void) &
  ((width: number, detailX: number) => void) &
  ((width: number, detailX: number, detailY: number) => void) &
  ((width: number, detailY: number) => void) &

  ((height: number) => void) &
  ((height: number, detailX: number) => void) &
  ((height: number, detailX: number, detailY: number) => void) &
  ((height: number, detailY: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &

  ((detailY: number) => void) &
  Runnable

type BoxConsumer =
  ((width: number) => void) &
  ((width: number, height: number) => void) &
  ((width: number, height: number, depth: number) => void) &
  ((width: number, height: number, depth: number, detailX: number) => void) &
  ((width: number, height: number, depth: number, detailX: number, detailY: number) => void) &
  ((width: number, height: number, depth: number, detailY: number) => void) &
  ((width: number, height: number, detailX: number) => void) &
  ((width: number, height: number, detailX: number, detailY: number) => void) &
  ((width: number, height: number, detailY: number) => void) &

  ((width: number, depth: number) => void) &
  ((width: number, depth: number, detailX: number) => void) &
  ((width: number, depth: number, detailX: number, detailY: number) => void) &
  ((width: number, depth: number, detailY: number) => void) &
  ((width: number, detailX: number) => void) &
  ((width: number, detailX: number, detailY: number) => void) &
  ((width: number, detailY: number) => void) &

  ((height: number) => void) &
  ((height: number, depth: number) => void) &
  ((height: number, depth: number, detailX: number) => void) &
  ((height: number, depth: number, detailX: number, detailY: number) => void) &
  ((height: number, depth: number, detailY: number) => void) &
  ((height: number, detailX: number) => void) &
  ((height: number, detailX: number, detailY: number) => void) &
  ((height: number, detailY: number) => void) &

  ((depth: number) => void) &
  ((depth: number, detailX: number) => void) &
  ((depth: number, detailX: number, detailY: number) => void) &
  ((depth: number, detailY: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &

  ((detailY: number) => void) &
  Runnable

type SphereConsumer =
  ((radius: number) => void) &
  ((radius: number, detailX: number) => void) &
  ((radius: number, detailX: number, detailY: number) => void) &
  ((radius: number, detailY: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &

  ((detailY: number) => void) &
  Runnable

type CylinderConsumer =
  ((radius: number) => void) &
  ((radius: number, height: number) => void) &
  ((radius: number, height: number, detailX: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number, bottomCap: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number, topCap: number) => void) &
  ((radius: number, height: number, detailX: number, bottomCap: number) => void) &
  ((radius: number, height: number, detailX: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, height: number, detailX: number, topCap: number) => void) &
  ((radius: number, height: number, detailY: number) => void) &
  ((radius: number, height: number, detailY: number, bottomCap: number) => void) &
  ((radius: number, height: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, height: number, detailY: number, topCap: number) => void) &
  ((radius: number, detailX: number) => void) &
  ((radius: number, detailX: number, detailY: number) => void) &
  ((radius: number, detailX: number, detailY: number, bottomCap: number) => void) &
  ((radius: number, detailX: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, detailX: number, bottomCap: number) => void) &
  ((radius: number, detailX: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, detailX: number, topCap: number) => void) &
  ((radius: number, detailY: number) => void) &
  ((radius: number, detailY: number, bottomCap: number) => void) &
  ((radius: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, detailY: number, topCap: number) => void) &
  ((radius: number, bottomCap: number) => void) &
  ((radius: number, bottomCap: number, topCap: number) => void) &
  ((radius: number, topCap: number) => void) &

  ((height: number) => void) &
  ((height: number, detailX: number) => void) &
  ((height: number, detailX: number, detailY: number) => void) &
  ((height: number, detailX: number, detailY: number, bottomCap: number) => void) &
  ((height: number, detailX: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((height: number, detailX: number, detailY: number, topCap: number) => void) &
  ((height: number, detailX: number, bottomCap: number) => void) &
  ((height: number, detailX: number, bottomCap: number, topCap: number) => void) &
  ((height: number, detailY: number) => void) &
  ((height: number, detailY: number, bottomCap: number) => void) &
  ((height: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((height: number, detailY: number, topCap: number) => void) &
  ((height: number, bottomCap: number) => void) &
  ((height: number, bottomCap: number, topCap: number) => void) &
  ((height: number, topCap: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &
  ((detailX: number, detailY: number, bottomCap: number) => void) &
  ((detailX: number, detailY: number, bottomCap: number, topCap: number) => void) &
  ((detailX: number, detailY: number, topCap: number) => void) &
  ((detailX: number, bottomCap: number) => void) &
  ((detailX: number, bottomCap: number, topCap: number) => void) &
  ((detailX: number, topCap: number) => void) &

  ((detailY: number) => void) &
  ((detailY: number, bottomCap: number) => void) &
  ((detailY: number, bottomCap: number, topCap: number) => void) &
  ((detailY: number, topCap: number) => void) &

  ((bottomCap: number) => void) &
  ((bottomCap: number, topCap: number) => void) &

  ((topCap: number) => void) &
  Runnable

type ConeConsumer =
  ((radius: number) => void) &
  ((radius: number, height: number) => void) &
  ((radius: number, height: number, detailX: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number) => void) &
  ((radius: number, height: number, detailX: number, detailY: number, cap: number) => void) &
  ((radius: number, height: number, detailX: number, cap: number) => void) &
  ((radius: number, height: number, detailY: number) => void) &
  ((radius: number, height: number, detailY: number, cap: number) => void) &
  ((radius: number, height: number, cap: number) => void) &

  ((radius: number, detailX: number) => void) &
  ((radius: number, detailX: number, detailY: number) => void) &
  ((radius: number, detailX: number, detailY: number, cap: number) => void) &
  ((radius: number, detailX: number, cap: number) => void) &
  ((radius: number, detailY: number) => void) &
  ((radius: number, detailY: number, cap: number) => void) &
  ((radius: number, cap: number) => void) &

  ((height: number) => void) &
  ((height: number, detailX: number) => void) &
  ((height: number, detailX: number, detailY: number) => void) &
  ((height: number, detailX: number, detailY: number, cap: number) => void) &
  ((height: number, detailX: number, cap: number) => void) &
  ((height: number, detailY: number) => void) &
  ((height: number, detailY: number, cap: number) => void) &
  ((height: number, cap: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &
  ((detailX: number, detailY: number, cap: number) => void) &
  ((detailX: number, cap: number) => void) &

  ((detailY: number) => void) &
  ((detailY: number, cap: number) => void) &

  ((cap: number) => void) &
  Runnable

type EllipsoidConsumer =
  ((radiusx: number) => void) &
  ((radiusx: number, radiusy: number) => void) &
  ((radiusx: number, radiusy: number, radiusz: number) => void) &
  ((radiusx: number, radiusy: number, radiusz: number, detailX: number) => void) &
  ((radiusx: number, radiusy: number, radiusz: number, detailX: number, detailY: number) => void) &
  ((radiusx: number, radiusy: number, radiusz: number, detailY: number) => void) &
  ((radiusx: number, radiusy: number, detailX: number) => void) &
  ((radiusx: number, radiusy: number, detailX: number, detailY: number) => void) &
  ((radiusx: number, radiusy: number, detailY: number) => void) &

  ((radiusx: number, radiusz: number) => void) &
  ((radiusx: number, radiusz: number, detailX: number) => void) &
  ((radiusx: number, radiusz: number, detailX: number, detailY: number) => void) &
  ((radiusx: number, radiusz: number, detailY: number) => void) &
  ((radiusx: number, detailX: number) => void) &
  ((radiusx: number, detailX: number, detailY: number) => void) &
  ((radiusx: number, detailY: number) => void) &

  ((radiusy: number) => void) &
  ((radiusy: number, radiusz: number) => void) &
  ((radiusy: number, radiusz: number, detailX: number) => void) &
  ((radiusy: number, radiusz: number, detailX: number, detailY: number) => void) &
  ((radiusy: number, radiusz: number, detailY: number) => void) &
  ((radiusy: number, detailX: number) => void) &
  ((radiusy: number, detailX: number, detailY: number) => void) &
  ((radiusy: number, detailY: number) => void) &

  ((radiusz: number) => void) &
  ((radiusz: number, detailX: number) => void) &
  ((radiusz: number, detailX: number, detailY: number) => void) &
  ((radiusz: number, detailY: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &

  ((detailY: number) => void) &
  Runnable

type TorusConsumer =
  ((radius: number) => void) &
  ((radius: number, tubeRadius: number) => void) &
  ((radius: number, tubeRadius: number, detailX: number) => void) &
  ((radius: number, tubeRadius: number, detailX: number, detailY: number) => void) &
  ((radius: number, tubeRadius: number, detailY: number) => void) &
  ((radius: number, detailX: number) => void) &
  ((radius: number, detailX: number, detailY: number) => void) &
  ((radius: number, detailY: number) => void) &

  ((tubeRadius: number) => void) &
  ((tubeRadius: number, detailX: number) => void) &
  ((tubeRadius: number, detailX: number, detailY: number) => void) &
  ((tubeRadius: number, detailY: number) => void) &

  ((detailX: number) => void) &
  ((detailX: number, detailY: number) => void) &

  ((detailY: number) => void) &
  Runnable


// 3d models
type SuccessCallback = (model: P5Geometry) => any
type FailureCallback = (event: any) => any
type ModelFileType = '.stl' | '.obj'

type LoadModelFn =
  ((path: string, normalize: boolean) => P5Geometry) &
  ((path: string, normalize: boolean, successCallback: SuccessCallback) => P5Geometry) &
  ((path: string, normalize: boolean, successCallback: SuccessCallback, failureCallback: FailureCallback) => P5Geometry) &
  ((path: string, normalize: boolean, successCallback: SuccessCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, normalize: boolean,
    successCallback: SuccessCallback, failureCallback: FailureCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, normalize: boolean, failureCallback: FailureCallback) => P5Geometry) &
  ((path: string, normalize: boolean, failureCallback: FailureCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, normalize: boolean, fileType: ModelFileType) => P5Geometry) &
  ((path: string) => P5Geometry) &
  ((path: string, successCallback: SuccessCallback) => P5Geometry) &
  ((path: string, successCallback: SuccessCallback, failureCallback: FailureCallback) => P5Geometry) &
  ((path: string, successCallback: SuccessCallback, failureCallback: FailureCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, successCallback: SuccessCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, failureCallback: FailureCallback) => P5Geometry) &
  ((path: string, failureCallback: FailureCallback, fileType: ModelFileType) => P5Geometry) &
  ((path: string, fileType: ModelFileType) => P5Geometry)


// ENVIRONMENT
export enum CursorType {
  ARROW = 'ARROW',
  CROSS = 'CROSS',
  HAND = 'HAND',
  MOVE = 'MOVE',
  TEXT = 'TEXT',
  WAIT = 'WAIT'
}

type CursorConsumer =
  ((type: string | CursorType) => void) &
  ((type: string | CursorType, x: number) => void) &
  ((type: string | CursorType, x: number, y: number) => void) &
  ((type: string | CursorType, y: number) => void)

type FrameRateConsumer = (fps: number) => void & Runnable

type FullscreenFn = ((val: boolean) => boolean) & BooleanSupplier

type PixelDensityConsumer = ((val: number) => void) & Runnable


// STRUCTURE
type RedrawFn = ((n: number) => void) & Runnable


// DOM
type SelectFn =
  ((selectors: string) => P5Element) &
  ((selectors: string, container: string | P5Element | HTMLElement) => P5Element)

type SelectAllFn =
  ((selectors: string) => P5Element[]) &
  ((selectors: string, container: string | P5Element | HTMLElement) => P5Element[])

type CreateGenericElementFn = ((html: string) => P5Element) & (() => P5Element)

type CreateSliderFn =
  ((min: number, max: number) => P5Element) &
  ((min: number, max: number, value: number) => P5Element) &
  ((min: number, max: number, value: number, step: number) => P5Element) &
  ((min: number, max: number, step: number) => P5Element)

type CreateButtonFn =
  ((label: string) => P5Element) &
  ((label: string, value: string) => P5Element)

type CreateCheckboxFn =
  ((label: string) => P5Element) &
  ((label: string, value: boolean) => P5Element) &
  ((value: boolean) => P5Element) &
  Runnable

type CreateSelectFn =
  ((existing: any) => P5Element) &
  ((multiple: boolean) => P5Element) &
  Runnable

type CreateRadioFn =
  ((containerElement: any) => P5Element) &
  ((containerElement: any, name: string) => P5Element) &
  ((name: string) => P5Element) &
  Runnable

type CreateColorPickerFn = ((value: string | P5Color) => P5Element) & Runnable

type CreateInputFn =
  ((value: string) => P5Element) &
  ((value: string, type: string) => P5Element) &
  Runnable

type CreateFileInputFn =
  ((callback: AnyFunction) => P5Element) &
  ((callback: AnyFunction, multiple: boolean) => P5Element)

type CreateVideoFn =
  ((src: string | string[]) => P5MediaElement) &
  ((src: string | string[], callback: AnyFunction) => P5MediaElement)

type CreateAudioFn =
  ((src: string | string[]) => P5MediaElement) &
  ((src: string | string[], callback: AnyFunction) => P5MediaElement) &
  ((callback: AnyFunction) => P5MediaElement) &
  Runnable

type CreateCaptureFn =
  ((type: 'VIDEO' | 'AUDIO' | string | any) => P5Element) &
  ((type: 'VIDEO' | 'AUDIO' | string | any, callback: AnyFunction) => P5Element)

type CreateElementFn =
  ((tag: string) => P5Element) &
  ((tag: string, content: string) => P5Element)


// RENDERING
type CreateCanvasFn = ((width: number, height: number) => any) & ((width: number, height: number, renderer: RendererType) => P5Renderer)

type ResizeCanvasConsumer = ((w: number, h: number) => void) & ((w: number, h: number, noRedraw: boolean) => void)

type CreateGraphicsFn = ((w: number, h: number) => P5Graphics) & ((w: number, h: number, renderer: RendererType) => P5Graphics)

type SetAttributeConsumer = ((key: string, value: boolean) => void) & ((obj: object) => void)


// TRANSFORM
type AngleConsumer = (angle: number) => void

type RotateConsumer = AngleConsumer & ((angle: number, axis: P5Vector | number[]) => void)

type ScaleConsumer =
  ((s: number | P5Vector | number[]) => void) &
  ((s: number | P5Vector | number[], y: number) => void) &
  ((s: number | P5Vector | number[], y: number, z: number) => void) &
  ((s: number | P5Vector | number[], z: number) => void) &
  ((scales: P5Vector | number[]) => void)

type TranslateConsumer =
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void) &
  ((vector: P5Vector) => void)

// DATA

// local storage
type LocalStorageItem = string | number | object | boolean | P5Color | P5Vector

// dictionary
type CreateDictFn<T, R> = ((key: T, value: T) => R) & ((obj: object) => R)

// array functions
type ArrayCopyConsumer =
  ((src: any[], srcPosition: number, dst: any[], dstPosition: number, length: number) => void) &
  ((src: any[], dst: any[]) => void) &
  ((src: any[], dst: any[], length: number) => void)

type ArrayShuffleFn =
  ((array: any[]) => any[]) &
  ((array: any[], bool: boolean) => any[])

// conversion
type NumberConversionFn = (n: string | boolean | number) => number
type NumberArrayConversionFn = (ns: string[] | boolean[] | number[]) => number

type IntConversionFn =
  NumberConversionFn &
  NumberArrayConversionFn &
  ((n: string | boolean | number, radix: number) => number)

type ByteConversionFn =
  NumberConversionFn &
  NumberArrayConversionFn

type CharConversionFn =
  ((n: NumberOrString) => string) &
  ((ns: ArrayOfNumberOrString) => string)

type StringNumConversionFn = ((n: string) => number) & ((ns: string[]) => number)

type HexConversionFn =
  ((n: number) => string) &
  ((n: number, digits: number) => string) &
  ((ns: number[]) => string) &
  ((ns: number[], digits: number) => string)

// string functions
type NumberFormatFn =
  NumberFormatCommaFn &
  ((num: NumberOrString, left: NumberOrString) => string) &
  ((num: NumberOrString, left: NumberOrString, right: NumberOrString) => string) &
  ((nums: ArrayOfNumberOrString, left: NumberOrString) => string) &
  ((nums: ArrayOfNumberOrString, left: NumberOrString, right: NumberOrString) => string)

type NumberFormatCommaFn =
  ((num: NumberOrString) => string) &
  ((num: NumberOrString, right: NumberOrString) => string) &
  ((nums: ArrayOfNumberOrString) => string) &
  ((nums: ArrayOfNumberOrString, right: NumberOrString) => string)

type SplitTokensFn =
  ((value: string) => string[]) &
  ((value: string, delim: string) => string[])

type TrimFn = ((str: string) => string) & ((strs: string[]) => string)


// EVENTS
type EventConsumer = ((event: any) => void) & Runnable

// keyboard
export enum KeyCode {
  BACKSPACE = 'BACKSPACE',
  DELETE = 'DELETE',
  ENTER = 'ENTER',
  RETURN = 'RETURN',
  TAB = 'TAB',
  ESCAPE = 'ESCAPE',
  SHIFT = 'SHIFT',
  CONTROL = 'CONTROL',
  OPTION = 'OPTION',
  ALT = 'ALT',
  UP_ARROW = 'UP_ARROW',
  DOWN_ARROW = 'DOWN_ARROW',
  LEFT_ARROW = 'LEFT_ARROW',
  RIGHT_ARROW = 'RIGHT_ARROW'
}


// IMAGE
type SaveCanvasConsumer =
  ((selectedCanvas: P5Element) => void) &
  ((selectedCanvas: P5Element, filename: string) => void) &
  ((selectedCanvas: P5Element, filename: string, extension: string) => void) &
  ((selectedCanvas: P5Element, extension: string) => void) &
  ((filename: string) => void) &
  ((filename: string, extension: string) => void) &
  ((extension: string) => void) &
  Runnable

type SaveFramesConsumer =
  ((filename: string, extension: string, duration: number, framerate: number) => void) &
  ((filename: string, extension: string, duration: number, framerate: number, callback: AnyFunction) => void)

// loading & display
type LoadImageFn =
  ((path: string) => P5Image) &
  ((path: string, successCallback: (img: P5Image) => void) => P5Image) &
  ((path: string, successCallback: (img: P5Image) => void, failureCallback: (event: Event) => void) => P5Image) &
  ((path: string, failureCallback: (event: Event) => void) => P5Image)


type Image = P5Image | P5Element

type ImageConsumer =
  ((img: Image, x: number, y: number) => void) &
  ((img: Image, x: number, y: number, width: number) => void) &
  ((img: Image, x: number, y: number, width: number, height: number) => void) &
  ((img: Image, x: number, y: number, height: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) => void) &
  ((img: Image, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sHeight: number) => void)

type TintConsumer =
  ((v1: number, v2: number, v3: number) => void) &
  ((v1: number, v2: number, v3: number, alpha: number) => void) &
  ((value: string) => void) &
  ((gray: number) => void) &
  ((gray: number, alpha: number) => void) &
  ((values: number[]) => void) &
  ((color: P5Color) => void)

export enum ImageMode {
  CENTER = 'CENTER',
  CORNER = 'CORNER',
  CORNERS = 'CORNERS'
}

// pixels
type BlendConsumer =
  ((srcImage: P5Image,
    sx: number, sy: number, sw: number, sh: number,
    dx: number, dy: number, dw: number, dh: number, blendMode: BlendMode) => void) &
  ((sx: number, sy: number, sw: number, sh: number,
    dx: number, dy: number, dw: number, dh: number, blendMode: BlendMode) => void)

type CopyConsumer =
  ((srcImage: P5Image, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void) &
  ((sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void)

type FilterConsumer = ((filterType: FilterType) => void) & ((filterType: FilterType, filterParam: number) => void)

type ImageGetFn =
  ((x: number, y: number, w: number, h: number) => P5Image) &
  ((x: number, y: number) => P5Image) &
  (() => P5Image)

type UpdatePixelsConsumer =
  ((x: number) => void) &
  ((x: number, y: number) => void) &
  ((x: number, y: number, w: number) => void) &
  ((x: number, y: number, w: number, h: number) => void) &
  ((x: number, y: number, h: number) => void) &
  ((x: number, w: number) => void) &
  ((x: number, w: number, h: number) => void) &
  ((x: number, h: number) => void) &

  ((y: number) => void) &
  ((y: number, w: number) => void) &
  ((y: number, w: number, h: number) => void) &
  ((y: number, h: number) => void) &

  ((w: number) => void) &
  ((w: number, h: number) => void) &

  ((h: number) => void) &
  Runnable
