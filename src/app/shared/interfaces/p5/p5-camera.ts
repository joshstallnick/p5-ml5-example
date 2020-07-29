import {Runnable} from '../../types'

export interface P5Camera {
  perspective: Runnable
  ortho: Runnable
  frustum: Runnable
  pan: AngleConsumer
  tilt: AngleConsumer
  lookAt: CoordinatesConsumer
  camera: Runnable
  move: CoordinatesConsumer
  setPosition: CoordinatesConsumer
}

type AngleConsumer = (angle: number) => void

type CoordinatesConsumer = (x: number, y: number, z: number) => void
