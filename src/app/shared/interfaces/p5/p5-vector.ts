/**
 * https://p5js.org/reference/#/p5.Vector
 */
import {NumberArraySupplier, NumberSupplier, StringSupplier} from '../../types'

export interface P5Vector {

  x?: number
  y?: number
  z?: number

  toString: StringSupplier                          // https://p5js.org/reference/#/p5.Vector/toString
  set: SetFn                                        // https://p5js.org/reference/#/p5.Vector/set
  copy: P5VectorSupplier                            // https://p5js.org/reference/#/p5.Vector/copy
  add: AddFn                                        // https://p5js.org/reference/#/p5.Vector/add
  rem: RemFn                                        // https://p5js.org/reference/#/p5.Vector/rem  //  missing return - double static
  sub: SubFn                                        // https://p5js.org/reference/#/p5.Vector/sub  // missing return
  mult: MutliDivFn                                  // https://p5js.org/reference/#/p5.Vector/mult
  div: MutliDivFn                                   // https://p5js.org/reference/#/p5.Vector/div
  mag: MagFn                                        // https://p5js.org/reference/#/p5.Vector/mag
  magSq: () => number                               // https://p5js.org/reference/#/p5.Vector/magSq
  dot: DotFn                                        // https://p5js.org/reference/#/p5.Vector/dot
  cross: CrossDistFn                                // https://p5js.org/reference/#/p5.Vector/cross
  dist: CrossDistFn,                                // https://p5js.org/reference/#/p5.Vector/dist
  normalize: P5VectorSupplier                       // https://p5js.org/reference/#/p5.Vector/normalize
  limit: (max: number) => void                      // https://p5js.org/reference/#/p5.Vector/limit
  setMag: (len: number) => void                     // https://p5js.org/reference/#/p5.Vector/setMag
  heading: NumberSupplier                           // https://p5js.org/reference/#/p5.Vector/heading
  rotate: NumberSupplier                            // https://p5js.org/reference/#/p5.Vector/rotate
  angleBetween: (value: P5Vector) => number         // https://p5js.org/reference/#/p5.Vector/angleBetween
  lerp: LerpFn                                      // https://p5js.org/reference/#/p5.Vector/lerp
  reflect: (surfaceNormal: P5Vector) => void        // https://p5js.org/reference/#/p5.Vector/reflect
  array: NumberArraySupplier                        // https://p5js.org/reference/#/p5.Vector/array
  equals: EqualsFn                                  // https://p5js.org/reference/#/p5.Vector/equals
  fromAngle: FromAngleFn                            // https://p5js.org/reference/#/p5.Vector/fromAngle
  fromAngles: FromAnglesFn                          // https://p5js.org/reference/#/p5.Vector/fromAngles
  random2D: P5VectorSupplier                        // https://p5js.org/reference/#/p5.Vector/random2D
  random3D: P5VectorSupplier                        // https://p5js.org/reference/#/p5.Vector/random3D
}

type P5VectorSupplier = () => P5Vector

type SetFn =
  ((x: number) => void) &
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void) &
  ((x: number, z: number) => void) &
  ((y: number) => void) &
  ((y: number, z: number) => void) &
  ((z: number) => void) &
  ((value: P5Vector | number[]) => void)

type AddFn =
  ((x: number) => P5Vector) &
  ((x: number, y: number) => P5Vector) &
  ((x: number, y: number, z: number) => P5Vector) &
  ((x: number, z: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector, target: P5Vector) => P5Vector)

type RemFn =
  ((x: number, y: number, z: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector)

type SubFn =
  ((x: number) => P5Vector) &
  ((x: number, y: number) => P5Vector) &
  ((x: number, y: number, z: number) => P5Vector) &
  ((x: number, z: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector, target: P5Vector) => P5Vector)

type MutliDivFn =
  ((n: number) => void) &
  ((x: number, y: number) => void) &
  ((x: number, y: number, z: number) => void) &
  ((arr: number[]) => void) &
  ((v: P5Vector) => void) &
  ((x: number, y: number) => P5Vector) &
  ((x: number, y: number, z: number) => P5Vector) &
  ((v: P5Vector, n: number) => P5Vector) &
  ((v: P5Vector, n: number, target: P5Vector) => P5Vector) &
  ((v0: P5Vector, v1: P5Vector) => P5Vector) &
  ((v0: P5Vector, v1: P5Vector, target: P5Vector) => P5Vector) &
  ((v0: P5Vector, arr: number[]) => P5Vector) &
  ((v0: P5Vector, arr: number[], target: P5Vector) => P5Vector)

type MagFn = (() => P5Vector) & ((vect: P5Vector) => P5Vector)

type DotFn =
  ((x: number) => number) &
  ((x: number, y: number) => number) &
  ((x: number, y: number, z: number) => number) &
  ((x: number, z: number) => number) &
  ((value: P5Vector) => number) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector)

type CrossDistFn = ((v: P5Vector) => P5Vector) & ((v1: P5Vector, v2: P5Vector) => P5Vector)

type LerpFn =
  ((x: number, y: number, z: number, amt: number) => void) &
  ((v: P5Vector, amt: number) => void) &
  ((v1: P5Vector, v2: P5Vector, amt: number) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector, amt: number, target: P5Vector) => P5Vector)

type EqualsFn =
  (() => boolean) &
  ((x: number) => boolean) &
  ((x: number, y: number) => boolean) &
  ((x: number, y: number, z: number) => boolean) &
  ((x: number, z: number) => boolean) &
  ((y: number) => boolean) &
  ((y: number, z: number) => boolean) &
  ((z: number) => boolean) &
  ((value: P5Vector | any[]) => boolean)

type FromAngleFn =
  ((angle: number) => P5Vector) &
  ((angle: number, length: number) => P5Vector)

type FromAnglesFn =
  ((theta: number, phi: number) => P5Vector) &
  ((theta: number, phi: number, length: number) => P5Vector)
