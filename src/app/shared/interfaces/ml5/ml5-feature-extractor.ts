import {AnyFunction} from '../../types'
import {P5Image, P5MediaElement} from '..'
import {ML5Image} from '../../types/ml5.types'

export interface ML5FeatureExtractor {
  modelLoaded: boolean
  hasAnyTrainedClass: boolean
  usageType: 'regressor' | 'classifier'
  isPredicting: boolean

  constructor: ML5FeatureExtractorFunction

  classification: VideoConsumer
  regression: VideoConsumer
  addImage: (label: any,
             input?: HTMLImageElement | HTMLVideoElement | P5MediaElement | P5Image | any,
             callback?: AnyFunction) => void
  train: (callback?: AnyFunction) => void
  classify: VideoImageConsumer
  predict: VideoImageConsumer
  save: (name: string, callback?: AnyFunction) => void
  load: (filesOrPath: any, callback?: AnyFunction) => any
}

type VideoConsumer = (video?: HTMLVideoElement | P5MediaElement | any, callback?: AnyFunction) => void
type VideoImageConsumer = (input?: ML5Image,
                           callback?: AnyFunction) => void

export const DEFAULT_FEATURE_EXTRACTOR_OPTIONS = {
  version: 1,
  alpha: 1.0,
  topk: 3,
  learningRate: 0.0001,
  hiddenUnits: 100,
  epochs: 20,
  numLabels: 2,
  batchSize: 0.4
}

export interface ML5FeatureExtractorOptions {
  version: number
  alpha: number
  topk: number
  learningRate: number
  hiddenUnits: number
  epochs: number
  numLabels: number
  batchSize: number
}

export type ML5FeatureExtractorFunction = (model: string,
                                           callback?: AnyFunction,
                                           options?: ML5FeatureExtractorOptions) => ML5FeatureExtractor
