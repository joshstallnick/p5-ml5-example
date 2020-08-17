import {AnyFunction} from '../../types'


export interface ML5ConditionalVariationalAutoencoder {

  ready: boolean

  constructor: ML5CVAEFunction
  generate: (label: string, callback: AnyFunction) => any
}

export type ML5CVAE = ML5ConditionalVariationalAutoencoder

export type ML5CVAEFunction = (model: string, callback: AnyFunction) => ML5CVAE
