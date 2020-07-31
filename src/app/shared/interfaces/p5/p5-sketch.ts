import {BlendMode, FilterType, P5Image} from './p5-image'
import {
  AnyFunction,
  ArrayOfNumberOrString,
  BooleanSupplier,
  NumberOrString,
  NumberSupplier,
  ObjectSupplier,
  Runnable,
  StringArraySupplier,
  StringSupplier
} from '../../types'
import {P5Color} from './p5-color'
import {P5Element} from './p5-element'
import {P5Renderer} from './p5-renderer'
import {P5Vector} from './p5-vector'
import {P5Geometry} from './p5-geometry'
import {P5MediaElement} from './p5-media-element'
import {P5Graphics} from './p5-graphics'
import {P5StringDict} from './p5-string-dict'
import {P5NumberDict} from './p5-number-dict'
import {P5Table} from './p5-table'
import {P5PrintWriter} from './p5-print-writer'
import {P5Font} from './p5-font'
import {P5Shader} from './p5-shader'
import {P5Camera} from './p5-camera'

/**
 * Structured to the documentation on the site
 *
 * https://p5js.org/reference/
 */
export interface P5Sketch extends P5Graphics {

  // COLOR
  // creating & reading
  alpha: ColorStandardFn
  blue: ColorStandardFn
  brightness: ColorStandardFn
  color: ColorFn
  green: ColorStandardFn
  hue: ColorStandardFn
  lerpColor: (c1: P5Color, c2: P5Color, amp: number) => P5Color
  lightness: ColorStandardFn
  red: ColorStandardFn
  saturation: ColorStandardFn

  // setting
  background: BackgroundFn
  clear: Runnable
  colorMode: (mode: ColorMode, max1?: number, max2?: number, max3?: number, maxA?: number) => void
  fill: ColorOptionsFn
  noFill: Runnable
  noStroke: Runnable
  stroke: ColorOptionsFn
  erase: (strengthFill?: number, strengthStroke?: number) => void
  noErase: Runnable


  // SHAPE
  // 2d primitives
  arc: (x: number, y: number, w: number, h: number, start: number, stop: number, mode?: ArchMode, detail?: number) => void
  ellipse: (x: number, y: number, w: number, h?: number, detail?: number) => void
  circle: (x: number, y: number, d: number) => void
  line: (x1: number, y1: number, x2: number, y2: number, z1?: number, z2?: number) => void
  point: PointFn
  quad: QuadBezierFn
  rect: RectFn
  square: (x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number) => void
  triangle: (x1: number, y1: number,
             x2: number, y2: number,
             x3: number, y3: number) => void

  // attributes
  ellipseMode: (mode: LocationMode) => void
  noSmooth: Runnable
  rectMode: (mode: LocationMode) => void
  smooth: Runnable
  strokeCap: (cap: CapType) => void
  strokeJoin: (join: JointType) => void
  strokeWeight: (weight: number) => void

  // curves
  bezier: QuadBezierFn
  bezierDetail: (detail: number) => void
  bezierPoint: BezierOptionsFn
  bezierTangent: BezierOptionsFn
  curve: QuadBezierFn
  curveDetail: (resolution: number) => void
  curveTightness: (amount: number) => void
  curvePoint: BezierOptionsFn
  curveTangent: BezierOptionsFn

  // vertex
  beginContour: Runnable
  beginShape: (kind?: ShapeKind) => void
  bezierVertex: BezierVertexFn
  curveVertexFn: (x: number, y: number, z?: number) => void
  endContour: Runnable
  endShape: (mode?: 'CLOSE') => void
  quadraticVertex: (cx: number, cy: number, x3: number, y3: number, z3?: number) => void
  vertex: (x: number, y: number, z?: number, u?: number, v?: number) => void

  // 3d primitives
  plane: (width?: number, height?: number, detailX?: number, detailY?: number) => void
  box: (width?: number, height?: number, depth?: number, detailX?: number, detailY?: number) => void
  sphere: (radius?: number, detailX?: number, detailY?: number) => void
  cylinder: (radius?: number, height?: number, detailX?: number, detailY?: number, bottomCap?: number, topCap?: number) => void
  cone: (radius?: number, height?: number, detailX?: number, detailY?: number, cap?: number) => void
  ellipsoid: (radiusx?: number, radiusy?: number, radiusz?: number, detailX?: number, detailY?: number) => void
  torus: (radius?: number, tubeRadius?: number, detailX?: number, detailY?: number) => void

  // 3d models
  loadModel: (path: string, normalize?: boolean,
              successCallback?: ModelFn, failureCallback?: (event: any) => any,
              fileType?: '.stl' | '.obj') => P5Geometry
  model: ModelFn


  // ENVIRONMENT
  frameCount: number
  deltaTime: number
  focused: boolean
  displayWidth: number
  displayHeight: number
  windowWidth: number
  windowHeight: number
  width: number
  height: number

  print: (contents: any) => void
  cursor: (type: string | CursorType, x?: number, y?: number) => void
  frameRate: (fps?: number) => void
  noCursor: Runnable
  windowResized: Runnable
  fullscreen: (val?: boolean) => boolean
  pixelDensity: (val?: number) => void
  displayDensity: NumberSupplier
  getURL: StringSupplier
  getURLPath: StringArraySupplier
  getURLParams: ObjectSupplier


  // STRUCTURE
  displayFriendlyErrors: boolean

  preload: Runnable
  setup: Runnable
  draw: Runnable
  remove: Runnable
  noLoop: Runnable
  loop: Runnable
  isLooping: BooleanSupplier
  push: Runnable
  pop: Runnable
  redraw: (n?: number) => void
  p5: (sketch: P5Sketch, node: string | Node) => any


  // DOM
  select: (selectors: string, container: string | P5Element | HTMLElement) => P5Element
  selectAll: (selectors: string, container: string | P5Element | HTMLElement) => P5Element[]
  removeElements: Runnable
  changed: AnyFunction | boolean
  input: AnyFunction | boolean
  createDiv: CreateGenericElementFn
  createP: CreateGenericElementFn
  createSpan: CreateGenericElementFn
  createImg: CreateGenericElementFn
  createA: CreateGenericElementFn
  createSlider: (min: number, max: number, value?: number, step?: number) => P5Element
  createButton: (label: string, value?: string) => P5Element
  createCheckbox: (label?: string, value?: boolean) => P5Element
  createSelect: CreateSelectFn
  createRadio: (containerElement?: any, name?: string) => P5Element
  createColorPicker: (value?: string | P5Color) => P5Element
  createInput: (value: string, type?: string) => P5Element
  createFileInput: (callback: AnyFunction, multiple?: boolean) => P5Element
  createVideo: (src: string | string[], callback?: AnyFunction) => P5MediaElement
  createAudioFn: (src?: string | string[], callback?: AnyFunction) => P5MediaElement
  createCapture: (type: 'VIDEO' | 'AUDIO' | string | any, callback?: AnyFunction) => P5Element
  createElement: (tag: string, content?: string) => P5Element


  // RENDERING
  drawingContext: any

  createCanvas: (width: number, height: number, renderer?: RendererType) => P5Renderer
  resizeCanvas: (w: number, h: number, noRedraw?: boolean) => void
  noCanvas: Runnable
  createGraphics: (w: number, h: number, renderer?: RendererType) => P5Sketch
  blendMode: (mode: BlendMode) => void
  setAttributes: SetAttributeConsumer


  // TRANSFORM
  applyMatrix: (a: number, b: number, c: number,
                d: number, e: number, f: number) => void
  resetMatrix: Runnable
  rotate: AngleConsumer & ((angle: number, axis: P5Vector | number[]) => void)
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
  shuffle: (array: any[], bool?: boolean) => any[]

  // conversion
  float: (str: NumberOrString) => number
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
  splitTokens: (value: string, delim?: string) => string[]
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

  setMoveThreshold: ValueConsumer
  setShakeThreshold: ValueConsumer
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
  doubleClicked: (fxn: Runnable | boolean) => P5Element
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
  saveFrame: (filename: string, extension: string, duration: number, framerate: number, callback?: AnyFunction) => void

  // loading & displaying
  loadImage: (path: string, successCallback?: (img: P5Image) => void, failureCallback?: (event: Event) => void) => P5Image
  image: ImageConsumer
  tint: TintConsumer
  noTint: Runnable
  imageMode: (mode: ImageMode) => void

  // pixels
  pixels: any
  blend: (sx: number, sy: number, sw: number, sh: number,
          dx: number, dy: number, dw: number, dh: number,
          blendMode: BlendMode, srcImage?: P5Image) => void
  copy: (sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, srcImage: P5Image) => void
  filter: (filterType: FilterType, filterParam?: number) => void
  get: ImageGetFn
  loadPixels: Runnable
  set: (x: number, y: number, c: number | number[] | P5Color | P5Image) => void
  updatePixels: (x?: number, y?: number, w?: number, h?: number) => void


  // IO
  // input
  loadJSON: (path: string, jsonOptions?: object, datatype?: 'json' | 'jsonp', callback?: AnyFunction, errorCallback?: AnyFunction) => any
  loadStrings: (filename: string, callback?: AnyFunction, errorCallback?: AnyFunction) => string[]
  loadTable: (filename: string, width?: number, height?: number, detailX?: number, detailY?: number) => P5Table
  loadXML: (filename: string, callback?: AnyFunction, errorCallback?: AnyFunction) => XMLDocument
  loadBytes: (file: string, callback?: AnyFunction, errorCallback?: AnyFunction) => object
  httpGet: HttpFn
  httpPost: HttpFn
  httpDo: HttpDoFn

  // output
  createWriter: (name: string, extension?: string) => P5PrintWriter
  save: (objectOrFilename?: object | string, filename?: string, options?: boolean | string) => void
  saveJSON: (json: any[] | object, filename: string, optimize?: boolean) => void
  saveString: (list: string[], filename: string, extension?: string, isCRLF?: boolean) => void
  saveTable: (table: P5Table, filename: string, options?: 'tsv' | 'csv' | 'html') => void

  // time & date
  day: NumberSupplier
  hour: NumberSupplier
  minute: NumberSupplier
  millis: NumberSupplier
  month: NumberSupplier
  second: NumberSupplier
  year: NumberSupplier

  // MATH
  // calculation
  abs: NumberFn
  ceil: NumberFn
  constrain: (n: number, low: number, high: number) => number
  dist: MathDistFn
  exp: NumberFn
  floor: NumberFn
  lerp: (start: number, stop: number, amt: number) => number
  log: NumberFn
  mag: (a: number, b: number) => number
  map: (value: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds?: boolean) => number
  max: MathMinMaxFn
  norm: (value: number, start: number, stop: number) => number
  pow: (n: number, e: number) => number
  round: (n: number, decimals?: number) => number
  sq: NumberFn
  sqrt: NumberFn
  fract: NumberFn

  // vector
  createVector: (x?: number, y?: number, z?: number) => P5Vector

  // noise
  noise: (x: number, y?: number, z?: number) => number
  noiseDetail: ((lod: number, falloff: number) => void)
  noiseSeed: (seed: number) => void

  // random
  randomSeed: (seed: number) => void
  random: RandomFn
  randomGaussian: (mean: number, sd: number) => number

  // trigonometry
  acos: TrigABaseFn
  asin: TrigABaseFn
  atan: TrigABaseFn
  atan2: (y: number, x: number) => number
  cos: TrigBaseFn
  sin: TrigBaseFn
  tan: TrigBaseFn
  degrees: (radians: number) => number
  radians: (degrees: number) => number
  angleMode: (mode: AngleMode) => void

  // TYPOGRAPHY
  // attributes
  textAlign: (horizAlign: HorizAlign | string, vertAlign?: VertAlign) => void
  textLeading: (leading?: number) => void
  textSize: (theSize?: number) => void
  textStyle: (theStyle?: TextStyle) => void
  textWidth: (theText: string) => number
  textAscent: NumberSupplier
  textDescent: NumberSupplier

  // loading & displaying
  loadFont: (path: string, callback?: AnyFunction, onError?: AnyFunction) => P5Font
  text: (str: string | object | any[] | number | boolean, x: number, y: number, x2?: number, y2?: number) => void
  textFont: (font?: object | string, size?: number) => object

  // LIGHTS, CAMERA
  // interaction
  orbitControl: OrbitControlConsumer
  debugMode: DebugModeConsumer
  noDebugMode: Runnable

  // lights
  ambientLight: AmbientLightConsumer
  specularColor: SpecularColorConsumer
  directionalLight: DirectionalPointLightConsumer
  lights: Runnable
  lightsFalloff: (constant: number, linear: number, quadratic: number) => void
  spotLight: SpotLightConsumer
  noLights: Runnable

  // material
  loadShader: (vertFilename: string, fragFilename: string, callback?: AnyFunction, errorCallback?: AnyFunction) => P5Shader
  createShader: (vertSrc: string, fragSrc: string) => P5Shader
  shader: (s?: P5Shader) => void
  resetShader: Runnable
  normalMaterial: Runnable
  texture: (tex: P5Image | P5MediaElement | P5Graphics) => void
  textureMode: (mode: TextureMode) => void
  textureWrap: (wrapX: TextureWrapType, wrapY?: TextureWrapType) => void
  ambientMaterial: AmbientMaterialConsumer
  emissiveMaterial: EmissiveMaterialConsumer
  specularMaterial: SpecularMaterialConsumer
  shininess: (shine: number) => void

  // camera
  camera:
    (x?: number, y?: number, z?: number,
     centerX?: number, centerY?: number, centerZ?: number,
     upX?: number, upY?: number, upZ?: number) => void
  perspective: (fovy?: number, aspect?: number, near?: number, far?: number) => void
  ortho: CameraFormConsumer
  frustum: CameraFormConsumer
  createCamera: () => P5Camera
  setCamera: (cam: P5Camera) => void
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
  ((gray: number, alpha?: number) => P5Color) &
  ((v1: number, v2: number, v3: number, alpha?: number) => P5Color) &
  ((value: string) => P5Color) &
  ((values: number[]) => P5Color) &
  ((color: P5Color) => P5Color)


// setting fns
type BackgroundFn =
  ((color: P5Color) => void) &
  ((colorString: string, a?: number) => void) &
  ((gray: number, a?: number) => void) &
  ((v1: number, v2: number, v3: number, a?: number) => void) &
  ((values: number[]) => void) &
  ((image: P5Image, a?: number) => void)

export enum ColorMode {
  RGB = 'RGB',
  HSB = 'HSB',
  HSL = 'HSL'
}

type ColorOptionsFn =
  ((v1: number, v2: number, v3: number, alpha?: number) => void) &
  ((value: string) => void) &
  ((gray: number, alpha?: number) => void) &
  ((values: number[]) => void) &
  ((color: P5Color) => void)


// SHAPE

// 2d primitives
export enum ArchMode {
  CHORD = 'CHORD',
  PIE = 'PIE',
  OPEN = 'OPEN'
}

type PointFn =
  ((x: number, y: number, z?: number) => void) &
  ((coordinateVector: P5Vector) => void)

type RectFn =
  ((x: number, y: number, w: number, h?: number, tl?: number, tr?: number, br?: number, bl?: number) => void) &
  ((x: number, y: number, w: number, h: number, detailX?: number, detailY?: number) => void)

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

type BezierVertexFn =
  ((x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) => void) &
  ((x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number) => void)

// 3d models
type ModelFn = (model: P5Geometry) => any


// ENVIRONMENT
export enum CursorType {
  ARROW = 'ARROW',
  CROSS = 'CROSS',
  HAND = 'HAND',
  MOVE = 'MOVE',
  TEXT = 'TEXT',
  WAIT = 'WAIT'
}


// DOM
type CreateGenericElementFn = (html?: string) => P5Element

type CreateSelectFn =
  ((existing: any) => P5Element) &
  ((multiple?: boolean) => P5Element)


// RENDERING
type SetAttributeConsumer = ((key: string, value: boolean) => void) & ((obj: object) => void)


// TRANSFORM
type AngleConsumer = (angle: number) => void

type ScaleConsumer =
  ((s: number | P5Vector | number[], y?: number, z?: number) => void) &
  ((scales: P5Vector | number[]) => void)

type TranslateConsumer =
  ((x: number, y: number, z?: number) => void) &
  ((vector: P5Vector) => void)


// DATA
// local storage
type LocalStorageItem = string | number | object | boolean | P5Color | P5Vector

// dictionary
type CreateDictFn<T, R> = ((key: T, value: T) => R) & ((obj: object) => R)

// array functions
type ArrayCopyConsumer =
  ((src: any[], srcPosition: number, dst: any[], dstPosition: number, length: number) => void) &
  ((src: any[], dst: any[], length?: number) => void)

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
  ((n: number, digits?: number) => string) &
  ((ns: number[], digits?: number) => string)

// string functions
type NumberFormatFn =
  NumberFormatCommaFn &
  ((num: NumberOrString, left: NumberOrString, right?: NumberOrString) => string) &
  ((nums: ArrayOfNumberOrString, left: NumberOrString, right?: NumberOrString) => string)

type NumberFormatCommaFn =
  ((num: NumberOrString, right?: NumberOrString) => string) &
  ((nums: ArrayOfNumberOrString, right?: NumberOrString) => string)

type TrimFn = ((str: string) => string) & ((strs: string[]) => string)


// EVENTS
type EventConsumer = (event?: any) => void

// acceleration
type ValueConsumer = (value: number) => void

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
  ((selectedCanvas: P5Element, filename?: string, extension?: string) => void) &
  ((filename?: string, extension?: string) => void)

// loading & display

type Image = P5Image | P5Element | P5Sketch

type ImageConsumer =
  ((img: Image, x: number, y: number, width?: number, height?: number) => void) &
  ((img: Image,
    dx: number, dy: number, dWidth: number, dHeight: number,
    sx: number, sy: number, sWidth?: number, sHeight?: number) => void)

type TintConsumer =
  ((v1: number, v2: number, v3: number, alpha?: number) => void) &
  ((value: string) => void) &
  ((gray: number, alpha?: number) => void) &
  ((values: number[]) => void) &
  ((color: P5Color) => void)

export enum ImageMode {
  CENTER = 'CENTER',
  CORNER = 'CORNER',
  CORNERS = 'CORNERS'
}

// pixels
type ImageGetFn =
  ((x: number, y: number, w?: number, h?: number) => P5Image) &
  (() => P5Image)


// IO
// input
type HttpFn =
  ((path: string, datatype?: string, data?: object | boolean, callback?: AnyFunction, errorCallback?: AnyFunction) => Promise<any>)

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}

type HttpDataType = 'json' | 'jsonp' | 'xml' | 'text'

type HttpDoFn =
  ((path: string,
    method: HttpMethod, datatype?: HttpDataType, data?: object,
    callback?: AnyFunction, errorCallback?: AnyFunction) => Promise<any>) &
  ((path: string, options: object, callback?: AnyFunction, errorCallback?: AnyFunction) => Promise<any>)


// MATH
// calculation
type NumberFn = (n: number) => number

type MathDistFn =
  ((x1: number, y1: number, x2: number, y2: number) => number) &
  ((x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => number)

type MathMinMaxFn = ((n0: number, n1: number) => number) & ((nums: number[]) => number)

// random
type RandomFn =
  ((min?: number, max?: number) => number) &
  ((choices: any[]) => number)

// trigonometry
export enum AngleMode {
  RADIANS = 'RADIANS',
  DEGREES = 'DEGREES'
}

type TrigABaseFn = (value: number) => number
type TrigBaseFn = (angle: number) => number


// TYPOGRAPHY
// attributes
export enum HorizAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

export enum VertAlign {
  TOP = 'top',
  BOTTOM = 'bottom',
  CENTER = 'center',
  BASELINE = 'baseline'
}

export enum TextStyle {
  NORMAL = 'NORMAL',
  ITALIC = 'ITALIC',
  BOLD = 'BOLD',
  BOLDITALIC = 'BOLDITALIC'
}


// LIGHTS, CAMERA
// interaction
type OrbitControlConsumer =
  ((sensitivityX: number, sensitivityY?: number, sensitivityZ?: number) => void) &
  ((sensitivityX: number, sensitivityZ?: number) => void) &
  ((sensitivityZ: number) => void)

export enum DebugMode {
  GRID = 'GRID',
  AXES = 'AXES'
}

type DebugModeConsumer =
  (debugMode?: DebugMode,
   gridSize?: number, gridDivisions?: number, axesSize?: number,
   xOff?: number, yOff?: number, zOff?: number,
   gridXOff?: number, gridYOff?: number, gridZOff?: number,
   axesXOff?: number, axesYOff?: number, axesZOff?: number) => void

// lights
type LightConsumer =
  ((value: string) => void) &
  ((values: number[]) => void) &
  ((color: P5Color) => void)

type AmbientLightConsumer =
  ((v1: number, v2: number, v3: number, alpha?: number) => void) &
  ((gray: number, alpha?: number) => void) &
  LightConsumer

type SpecularColorConsumer =
  ((v1: number, v2: number, v3: number) => void) &
  ((gray: number) => void) &
  LightConsumer

type LightColor = number[] | string | P5Color

type DirectionalPointLightConsumer =
  ((v1: number, v2: number, v3: number, position: P5Vector) => void) &
  ((v1: number, v2: number, v3: number, x: number, y: number, z: number) => void) &
  ((color: LightColor, x: number, y: number, z: number) => void) &
  ((color: LightColor, position: P5Vector) => void)

type SpotLightConsumer =
  ((v1: number, v2: number, v3: number,
    x: number, y: number, z: number,
    rx: number, ry: number, rz: number, angle?: number, conc?: number) => void) &
  ((color: P5Color, position: P5Vector, direction: P5Vector, angle?: number, conc?: number) => void) &
  ((v1: number, v2: number, v3: number, position: P5Vector, direction: P5Vector, angle?: number, conc?: number) => void) &
  ((color: P5Color, x: number, y: number, z: number, direction: P5Vector, angle?: number, conc?: number) => void) &
  ((color: P5Color, position: P5Vector, rx: number, ry: number, rz: number, angle?: number, conc?: number) => void) &
  ((v1: number, v2: number, v3: number, x: number, y: number, z: number, direction: P5Vector, angle?: number, conc?: number) => void) &
  ((v1: number, v2: number, v3: number, position: P5Vector, rx: number, ry: number, rz: number, angle?: number, conc?: number) => void) &
  ((color: P5Color, x: number, y: number, z: number, rx: number, ry: number, rz: number, angle?: number, conc?: number) => void)

// material
export enum TextureMode {
  IMAGE = 'IMAGE',
  NORMAL = 'NORMAL'
}

export enum TextureWrapType {
  CLAMP = 'CLAMP',
  REPEAT = 'REPEAT',
  MIRROR = 'MIRROR'
}

type MaterialColorConsumer = ((color: number[] | string | P5Color) => void)

type AmbientMaterialConsumer =
  ((v1: number, v2?: number, v3?: number) => void) &
  MaterialColorConsumer

type EmissiveMaterialConsumer =
  ((v1: number, v2?: number, v3?: number, a?: number) => void) &
  MaterialColorConsumer

type SpecularMaterialConsumer =
  ((gray: number, alpha?: number) => void) &
  EmissiveMaterialConsumer

// camera
type CameraFormConsumer = (left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number) => void
