import {AnyFunction, Runnable} from '../../types'
import {ClassifiedResults, PredictedResults} from '../../types/ml5.types'

export interface ML5NeuralNetwork {

  callback: AnyFunction
  options: object
  neuralNetwork: any
  neuralNetworkData: any
  neuralNetworkVis: any
  data: any
  ready: boolean

  constructor: ML5NeuralNetworkFunction

  addData: (xs: ObjectOrArray, ys: ObjectOrArray) => void
  normalizeData: Runnable
  train: (optionsOrCallback?: {batchSize: number, epochs: number} | AnyFunction,
          optionsOrWhileTraining?: AnyFunction,
          callback?: AnyFunction) => void
  predict: (inputs: ObjectOrArray, callback: AnyFunction) => PredictedResults
  predictMultiple: (inputs: ObjectArrayOr2DArray, callback: AnyFunction) => PredictedResults[]
  classify: (inputs: ObjectOrArray, callback: AnyFunction) => ClassifiedResults
  classifyMultiple: (inputs: ObjectArrayOr2DArray, callback: AnyFunction) => ClassifiedResults[]
  saveData: SaveConsumer
  loadData: LoadConsumer
  save: SaveConsumer
  load: LoadConsumer
}

type ObjectOrArray = object | any[]
type ObjectArrayOr2DArray = object[] | any[][]

type SaveConsumer = (outputName?: string, callback?: AnyFunction) => void
type LoadConsumer = (fileOrPath?: string | any, callback?: AnyFunction) => void

export const DEFAULT_NEURAL_NETWORK_OPTIONS: ML5NeuralNetworkOptions = {
  inputs: [],
  outputs: [],
  layers: [],
  debug: false,
  learningRate: 0.2,
  hiddenUnits: 16
}

// https://learn.ml5js.org/docs/#/reference/neural-network?id=arguments-for-ml5neuralnetworkoptions
export interface ML5NeuralNetworkOptions {
  inputs: any[] | number
  outputs: any[] | number,
  dataUrl?: string,
  modelUrl?: string,
  layers?: any[],
  task?: ML5NeuralNetworkTask,
  debug: boolean,
  learningRate?: number,
  hiddenUnits?: number
}

export type ML5NeuralNetworkFunction = (opts: ML5NeuralNetworkOptions) => ML5NeuralNetwork

export enum ML5NeuralNetworkTask {
  Classification = 'classification',
  Regression = 'regression',
  ImageClassification = 'imageClassification'
}
