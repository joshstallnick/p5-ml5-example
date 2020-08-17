import {P5MediaElement} from '..'
import {AnyFunction} from '../../types'

export interface ML5YOLO {
  isPredicting: boolean
  modelReady: boolean

  constructor: ML5YOLOFunction

  detect: (input?: HTMLVideoElement | P5MediaElement, callback?: AnyFunction) => any[]
}

export type ML5YOLOFunction = (video?: HTMLVideoElement | P5MediaElement, options?: any, callback?: AnyFunction) => ML5YOLO
