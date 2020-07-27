import {AnyFunction, Runnable} from '../../types'

/**
 * https://p5js.org/reference/#/p5.Geometry
 */
export interface P5Geometry {
  detailX?: number
  detailY?: number
  callback: AnyFunction

  computeFaces: Runnable                // https://p5js.org/reference/#/p5.Geometry/computeFaces
  computeNormals: Runnable              // https://p5js.org/reference/#/p5.Geometry/computeNormals
  averageNormals: Runnable              // https://p5js.org/reference/#/p5.Geometry/averageNormals
  averagePoleNormals: Runnable          // https://p5js.org/reference/#/p5.Geometry/averagePoleNormals
  normalize: Runnable                   // https://p5js.org/reference/#/p5.Geometry/normalize
}
