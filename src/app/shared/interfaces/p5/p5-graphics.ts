import {Runnable} from '../../types'
import {RendererType} from './p5-sketch'

export interface P5Graphics {
  w: number
  h: number
  renderer: RendererType
  pInst?: any

  reset: Runnable
  remove: Runnable
}
