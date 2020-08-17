import {AnyFunction} from '../../types'
import {P5MediaElement} from '..'

interface ML5UnetSegmentMask {
  featureMask: any
  backgroundMask: any
}

export interface ML5UnetSegment {
  segmentation: any
  blob: ML5UnetSegmentMask
  tensor: ML5UnetSegmentMask
  raw: ML5UnetSegmentMask
  featureMask?: any
  backgroundMask?: any
  mask?: any
}


export interface ML5Unet {
  ready: boolean

  constructor: (model: string, callback?: AnyFunction) => ML5Unet
  segment: (video?: HTMLVideoElement | P5MediaElement, callback?: AnyFunction) => ML5UnetSegment
}
