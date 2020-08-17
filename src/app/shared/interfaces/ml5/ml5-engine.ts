import {ML5NeuralNetworkFunction} from './ml5-neural-network'
import {ML5FeatureExtractorFunction} from './ml5-feature-extractor'
import {ML5KNNClassifier} from './ml5-knn-classifier'
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point'
import {ML5KMeans} from './ml5-kmeans'
import {AnyFunction} from '../../types'
import {ML5ImageClassifierFunction} from './ml5-image-classifier'
import {ML5PoseNetFunction} from './ml5-pose-net'
import {ML5BodyPixFn} from './ml5-body-pix'
import {ML5UNETFunction} from './ml5-u-net'
import {ML5FaceAPIFunction} from './ml5-face-api'

export interface ML5Engine {
  neuralNetwork: ML5NeuralNetworkFunction,
  featureExtractor: ML5FeatureExtractorFunction
  kmeans: (data: JsonObject | URL | any, options?: { k: number, maxIter: number, threshold: any }, callback?: AnyFunction) => ML5KMeans
  imageClassifier: ML5ImageClassifierFunction
  poseNet: ML5PoseNetFunction
  bodyPix: ML5BodyPixFn
  uNET: ML5UNETFunction
  faceAPI: ML5FaceAPIFunction

  KNNClassifier: () => ML5KNNClassifier
}
