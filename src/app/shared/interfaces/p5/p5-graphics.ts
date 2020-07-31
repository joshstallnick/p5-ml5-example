import {Runnable} from '../../types'
import {RendererType} from './p5-sketch'
import {P5Element} from './p5-element'

export interface P5Graphics extends P5Element {
  w: number
  h: number
  renderer: RendererType
  pInst?: any

  reset: Runnable
  remove: Runnable
}
