/**
 * https://p5js.org/reference/#/p5.Vector
 */
import {NumberArraySupplier, NumberSupplier, StringSupplier} from '../../types'

export interface P5Vector {

  x?: number
  y?: number
  z?: number

  toString: StringSupplier
  set: SetFn
  copy: P5VectorSupplier
  add: AddFn
  rem: RemFn                                        // https://p5js.org/reference/#/p5.Vector/rem  //  missing return - double static
  sub: SubFn                                        // https://p5js.org/reference/#/p5.Vector/sub  // missing return
  mult: MutliDivFn
  div: MutliDivFn
  mag: (vect?: P5Vector) => number
  magSq: NumberSupplier
  dot: DotFn
  cross: CrossDistFn
  dist: CrossDistFn,
  normalize: P5VectorSupplier
  limit: (max: number) => void
  setMag: (len: number) => void
  heading: NumberSupplier
  rotate: NumberSupplier
  angleBetween: (value: P5Vector) => number
  lerp: LerpFn
  reflect: (surfaceNormal: P5Vector) => void
  array: NumberArraySupplier
  equals: EqualsFn
  fromAngle: FromAngleFn
  fromAngles: FromAnglesFn
  random2D: P5VectorSupplier
  random3D: P5VectorSupplier
}

type P5VectorSupplier = () => P5Vector

type SetFn =
  ((x?: number, y?: number, z?: number) => void) &
  ((value: P5Vector | number[]) => void)

type AddFn =
  ((x?: number, y?: number, z?: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector, target?: P5Vector) => P5Vector)

type RemFn =
  ((x: number, y: number, z: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector)

type SubFn =
  ((x: number, y?: number, z?: number) => P5Vector) &
  ((value: P5Vector | number[]) => P5Vector) &
  ((v1: P5Vector, v2: P5Vector, target?: P5Vector) => P5Vector)

type MutliDivFn =
  ((n: number) => P5Vector) &
  ((arr: number[]) => P5Vector) &
  ((v: P5Vector) => P5Vector) &
  ((x: number, y: number, z?: number) => P5Vector) &
  ((v: P5Vector, n: number, target?: P5Vector) => P5Vector) &
  ((v0: P5Vector, v1: P5Vector, target?: P5Vector) => P5Vector) &
  ((v0: P5Vector, arr: number[], target?: P5Vector) => P5Vector)

type DotFn =
  ((x: number, y?: number, z?: number) => number) &
  ((value: P5Vector) => number) &
  ((v1: P5Vector, v2: P5Vector) => P5Vector)

type CrossDistFn = ((v: P5Vector) => P5Vector) & ((v1: P5Vector, v2: P5Vector) => P5Vector)

type LerpFn =
  ((x: number, y: number, z: number, amt: number) => void) &
  ((v: P5Vector, amt: number) => void) &
  ((v1: P5Vector, v2: P5Vector, amt: number, target?: P5Vector) => P5Vector)

type EqualsFn =
  ((x?: number, y?: number, z?: number) => boolean) &
  ((value: P5Vector | any[]) => boolean)

type FromAngleFn = (angle: number, length?: number) => P5Vector

type FromAnglesFn = (theta: number, phi: number, length?: number) => P5Vector
