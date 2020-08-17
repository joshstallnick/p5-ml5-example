import {AnyFunction} from '../../types'

export interface ML5PitchDetection {
  audioContext: any
  model: any
  results: any
  running: boolean
  stream: any

  constructor: ML5PitchDetectionFunction
  getPitch: (callback?: AnyFunction) => any
}

export type ML5PitchDetectionFunction =
  (model: string | 'CREPE', audioContext: any, stream: any, callback?: AnyFunction) => ML5PitchDetection
