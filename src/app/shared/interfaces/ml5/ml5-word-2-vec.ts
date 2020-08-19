import {ML5ModelCreatorFunction} from '../../types/ml5.types'
import {AnyFunction} from '../../types'

export interface ML5Word2Vec {
  ready: boolean
  model: object

  constructor: ML5Word2VecFunction
  add: CalculateFunction
  subtract: CalculateFunction
  average: CalculateFunction
  nearest: CalculateFunction
  getRandomWord: (callback?: AnyFunction) => string
}

type CalculateFunction = (inputs: string[], max?: number, callback?: AnyFunction) => any

export type ML5Word2VecFunction = ML5ModelCreatorFunction<ML5Word2Vec>
