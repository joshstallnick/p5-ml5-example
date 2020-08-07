import {AnyFunction} from '../../types'
import {P5Image} from '..'

export interface ML5BodyPix {
  video: HTMLVideoElement
  model: any
  modelReady: boolean
  modelPath: string
  config: any

  constructor: ML5BodyPixFn

  segment: SegmentFn
  segmentWithParts: SegmentFn
}

type SegmentFn = (callback: AnyFunction,
                  input?: HTMLVideoElement | HTMLImageElement | ImageData | HTMLCanvasElement,
                  options?: ML5BodyPixOptions) => Uint8Array | P5Image

export type ML5BodyPixFn = (callback: AnyFunction, video?: HTMLVideoElement, options?: ML5BodyPixOptions) => ML5BodyPix

export interface ML5BodyPixOptions {
  multiplier: number,
  outputStride: 8 | 16 | 32
  segmentationThreshold: number
  palette: {
    leftFace: BodyPixColor
    rightFace: BodyPixColor
    rightUpperLegFront: BodyPixColor
    rightLowerLegFront: BodyPixColor
    rightUpperLegBack: BodyPixColor
    rightLowerLegBack: BodyPixColor
    leftUpperLegFront: BodyPixColor
    leftLowerLegFront: BodyPixColor
    leftUpperLegBack: BodyPixColor
    leftLowerLegBack: BodyPixColor
    rightFeet: BodyPixColor
    leftFeet: BodyPixColor
    torsoFront: BodyPixColor
    torsoBack: BodyPixColor
    rightUpperArmFront: BodyPixColor
    rightLowerArmFront: BodyPixColor
    rightUpperArmBack: BodyPixColor
    rightLowerArmBack: BodyPixColor
    leftUpperArmFront: BodyPixColor
    leftLowerArmFront: BodyPixColor
    leftUpperArmBack: BodyPixColor
    leftLowerArmBack: BodyPixColor
    leftHand: BodyPixColor
    rightHand: BodyPixColor
  }
}

type BodyPixColor = {id: number, color: [number, number, number]}
