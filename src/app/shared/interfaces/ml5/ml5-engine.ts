import {ML5NeuralNetwork, ML5NeuralNetworkFn, ML5NeuralNetworkOptions} from './ml5-neural-network'
import {ML5FeatureExtractorFn} from './ml5-feature-extractor'
import {ML5KNNClassifier} from './ml5-knn-classifier'
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point'
import {ML5KMeans} from './ml5-kmeans'
import {AnyFunction} from '../../types'

export interface ML5Engine {
  neuralNetwork: ML5NeuralNetworkFn,
  featureExtractor: ML5FeatureExtractorFn

  KNNClassifier: () => ML5KNNClassifier

  kmeans: (data: JsonObject | URL | any, options?: {k: number, maxIter: number, threshold: any}, callback?: AnyFunction) => ML5KMeans
}
