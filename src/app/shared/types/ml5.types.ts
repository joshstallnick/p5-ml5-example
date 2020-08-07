import {P5Image, P5MediaElement} from '../interfaces'

export type PredictedResults = {value: any, label: any}[]
export type ClassifiedResults = {label: any, confidence: any}[]
export type ML5Image = HTMLImageElement | HTMLVideoElement | P5MediaElement | P5Image | any
