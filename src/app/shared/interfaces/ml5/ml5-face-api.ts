
export interface ML5FaceAPIDetection {
  alignRect: any
  detection: any
  landmarks: any
  unshiftedLandmarks: any
}

export interface ML5FaceAPI {
  video: any
  model: object
  modelReady: boolean
  config: object
  ready: boolean

  constructor: ML5FaceAPIFunction
  detect: DetectFunction<ML5FaceAPIDetection[]>
  detectSingle: DetectFunction<ML5FaceAPIDetection>
}

type DetectFunction<T> = (optionsOrCallback: any, configOrCallback: any, callback: any) => T

export type ML5FaceAPIFunction = (videoOrOptionsOrCallback: any, optionsOrCallback?: any, callback?: any) => ML5FaceAPI
