import {P5MediaElement} from '..'
import {AnyFunction} from '../../types'
import {ML5Image} from '../../types/ml5.types'

export interface ML5StyleTransfer {
  ready: boolean

  constructor: ML5StyleTransferFunction
  transfer: (input?: ML5Image, callback?: AnyFunction) => HTMLImageElement
}

export type ML5StyleTransferFunction = (model: string, video?: HTMLVideoElement | P5MediaElement, callback?: AnyFunction) =>
  ML5StyleTransfer
