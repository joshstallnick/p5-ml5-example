import {ML5ModelCreatorFunction} from '../../types/ml5.types'
import {AnyFunction, Runnable} from '../../types'

export interface ML5CharRNN {
  ready: boolean
  state: any
  model: any
  vocabSize: any

  constructor: ML5CharRNNFunction
  generate: (options: {seed: string, length: number, temperature: number}, callback: AnyFunction) => {sample: any, state: any}
  predict: (temperature: number, callback?: AnyFunction) => {sample: any, probabilities: any}
  feed: (seed: string, callback?: AnyFunction) => any
  reset: Runnable
}

export type ML5CharRNNFunction = ML5ModelCreatorFunction<ML5CharRNN>
