import {AnyFunction} from '../../types'
import {ML5Image} from '../../types/ml5.types'

export interface ML5PoseNet {
  net: any
  video?: any
  architecture: any
  detectionType: any
  imageScaleFactor: any
  outputStride: 8 | 16 | 32
  flipHorizontal: boolean
  scoreThreshold: number
  maxPoseDetections: number
  multiplier: number
  inputResolution: 161 | 193 | 257 | 289 | 321 | 353 | 385 | 417 | 449 | 481 | 513 | 801
  quantBytes: any
  nmsRadius: number

  constructor: ML5PoseNetFunction
  on: (event: 'pose', callback: AnyFunction) => object[]
  singlePose: (input?: ML5Image) => ML5Pose[]
  multiPose: (input?: ML5Image | number) => ML5Pose[]
}

export type ML5PoseNetFunction =
  ((video?: HTMLVideoElement, type?: 'single' | 'multiple', callback?: AnyFunction, options?: ML5PoseNetOptions) => ML5PoseNet) &
  ((video?: HTMLVideoElement, callback?: AnyFunction) => ML5PoseNet)


export interface ML5Pose {
  keypoints: {
    position: {x: number, y: number}
    score: any
    part: any
  }[]
  [name: string]: {x: number, y: number, confidence: number} | {position: {x: number, y: number}, score: any, part: any}[]
}

export const ML5_POSE_NET_OPTIONS_DEFAULT = {
  architecture: 'MobileNetV1',
  imageScaleFactor: 0.3,
  outputStride: 16,
  flipHorizontal: false,
  minConfidence: 0.5,
  maxPoseDetections: 5,
  scoreThreshold: 0.5,
  nmsRadius: 20,
  detectionType: 'multiple',
  inputResolution: 513,
  multiplier: 0.75,
  quantBytes: 2,
}

export interface ML5PoseNetOptions {
  architecture: string
  imageScaleFactor: number
  outputStride: number
  flipHorizontal: boolean
  minConfidence: number
  maxPoseDetections: number
  scoreThreshold: number
  nmsRadius: number
  detectionType: 'single' | 'multiple'
  inputResolution: number
  multiplier: number
  quantBytes: number
}
