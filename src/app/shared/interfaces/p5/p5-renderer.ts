import {P5} from '../../types'
import {P5Element} from './p5-element'

export interface P5Renderer extends P5Element {
  elt: string
  pInst?: P5
  isMainCanvas?: boolean
}
