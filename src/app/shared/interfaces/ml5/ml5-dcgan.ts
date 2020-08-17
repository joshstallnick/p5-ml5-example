import {AnyFunction} from '../../types'

export interface ML5DeepConvolutionalGenerativeAdversarialNetworks {
  modelReady: boolean
  model: object
  modelPath: string

  constructor: ML5DCGANFunction
  generate: (callback: AnyFunction, latentVector?: any) => any
}

export type ML5DCGAN = ML5DeepConvolutionalGenerativeAdversarialNetworks

export type ML5DCGANFunction = (modelPath: any, callback: AnyFunction) => ML5DCGAN
