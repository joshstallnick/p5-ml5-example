import {AnyFunction} from '../../types'
import {ClassifiedResults} from '../../types/ml5.types'

export interface ML5ImageClassifier {
  video?: HTMLVideoElement
  model: object
  modelName: string
  modelUrl: string

  constructor: (model: ImageClassifierModel | string, video?: HTMLVideoElement,
                option?: {version?: number, alpha?: number, topk?: number},
                callback?: AnyFunction) => ML5ImageClassifier

  classify: (input: HTMLImageElement | ImageData | HTMLCanvasElement | HTMLVideoElement,
             numberOfClasses?: number,
             callback?: AnyFunction) => ClassifiedResults
}

export enum ImageClassifierModel {
  MOBILE_NET = 'MobileNet',
  DARK_NET = 'Darknet',
  DOODLE_NET = 'DoodleNet'
}
