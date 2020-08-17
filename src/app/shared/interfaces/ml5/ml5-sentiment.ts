import {ML5ModelCreatorFunction} from '../../types/ml5.types'

export interface ML5Sentiment {
  ready: boolean
  model: any
  
  constructor: ML5SentimentFunction
  predict: (test: string) => object
}

export type ML5SentimentFunction = ML5ModelCreatorFunction<ML5Sentiment>
