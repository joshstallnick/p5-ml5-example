import {ML5ModelCreatorFunction} from '../../types/ml5.types'
import {AnyFunction, Runnable} from '../../types'

export interface ML5SketchRNN {
  ready: boolean

  constructor: ML5SketchRNNFunction
  reset: Runnable
  generate: (seed?: any, options?: any, callback?: AnyFunction) => {dx: number, dy: number, down: boolean, up: boolean, end: boolean}
}

export type ML5SketchRNNFunction = ML5ModelCreatorFunction<ML5SketchRNN>
