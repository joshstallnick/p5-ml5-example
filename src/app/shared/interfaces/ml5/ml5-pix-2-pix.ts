import {ML5ModelCreatorFunction} from '../../types/ml5.types'
import {AnyFunction} from '../../types'

export interface ML5Pix2Pix {

  ready: boolean

  constructor: ML5Pix2PixFunction
  transfer: (canvas: HTMLCanvasElement, callback?: AnyFunction) => HTMLImageElement
}

export type ML5Pix2PixFunction = ML5ModelCreatorFunction<ML5Pix2Pix>
