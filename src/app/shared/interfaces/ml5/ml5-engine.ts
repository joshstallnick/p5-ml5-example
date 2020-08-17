import {ML5NeuralNetworkFn} from './ml5-neural-network'
import {ML5FeatureExtractorFn} from './ml5-feature-extractor'
import {ML5KNNClassifier} from './ml5-knn-classifier'
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point'
import {ML5KMeans} from './ml5-kmeans'
import {AnyFunction} from '../../types'
import {ML5ImageClassifierFn} from './ml5-image-classifier'
import {ML5PoseNetFn} from './ml5-pose-net'
import {ML5BodyPixFn} from './ml5-body-pix'

export interface ML5Engine {
  neuralNetwork: ML5NeuralNetworkFn,
  featureExtractor: ML5FeatureExtractorFn
  kmeans: (data: JsonObject | URL | any, options?: { k: number, maxIter: number, threshold: any }, callback?: AnyFunction) => ML5KMeans
  imageClassifier: ML5ImageClassifierFn
  poseNet: ML5PoseNetFn
  bodyPix: ML5BodyPixFn

  KNNClassifier: () => ML5KNNClassifier
}
