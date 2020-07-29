import {AnyFunction, Runnable} from '../../types'

/**
 * https://p5js.org/reference/#/p5.Geometry
 */
export interface P5Geometry {
  detailX?: number
  detailY?: number
  callback: AnyFunction

  computeFaces: Runnable
  computeNormals: Runnable
  averageNormals: Runnable
  averagePoleNormals: Runnable
  normalize: Runnable
}
