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
import {ML5StyleTransferFunction} from './ml5-style-transfer'
import {ML5Pix2PixFunction} from './ml5-pix-2-pix'
import {ML5CVAEFunction} from './ml5-cvae'
import {ML5DCGANFunction} from './ml5-dcgan'
import {ML5SketchRNNFunction} from './ml5-sketch-rnn'
import {ML5YOLOFunction} from './ml5-yolo'

export interface ML5Engine {
  NeuralNetwork: ML5NeuralNetworkFunction,
  FeatureExtractor: ML5FeatureExtractorFunction
  KMeans: (data: JsonObject | URL | any, options?: { k: number, maxIter: number, threshold: any }, callback?: AnyFunction) => ML5KMeans
  ImageClassifier: ML5ImageClassifierFunction
  PoseNet: ML5PoseNetFunction
  BodyPix: ML5BodyPixFn
  UNET: ML5UNETFunction
  FaceAPI: ML5FaceAPIFunction
  StyleTransfer: ML5StyleTransferFunction
  Pix2Pix: ML5Pix2PixFunction
  CVAE: ML5CVAEFunction
  DCGAN: ML5DCGANFunction
  SketchRNN: ML5SketchRNNFunction
  YOLO: ML5YOLOFunction

  KNNClassifier: () => ML5KNNClassifier
}
