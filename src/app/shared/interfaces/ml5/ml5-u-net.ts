import {AnyFunction} from '../../types'
import {P5MediaElement} from '..'

interface ML5UNETSegmentMask {
  featureMask: any
  backgroundMask: any
}

export interface ML5UNETSegment {
  segmentation: any
  blob: ML5UNETSegmentMask
  tensor: ML5UNETSegmentMask
  raw: ML5UNETSegmentMask
  featureMask?: any
  backgroundMask?: any
  mask?: any
}


export interface ML5UNET {
  ready: boolean

  constructor: ML5UNETFunction
  segment: (video?: HTMLVideoElement | P5MediaElement, callback?: AnyFunction) => ML5UNETSegment
}

export type ML5UNETFunction = (model: string, callback?: AnyFunction) => ML5UNET
