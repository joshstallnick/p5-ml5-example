import {AnyFunction} from '../../types'
import {ClassifiedResults} from '../../types/ml5.types'

export interface ML5SoundClassifier {
  model: object

  constructor: ML5SoundClassifierFunction
  classify: (callback: AnyFunction) => ClassifiedResults
}

export type ML5SoundClassifierFunction =
  (model?: string, options?: {probabilityThreshold: number}, callback?: AnyFunction) => ML5SoundClassifier
