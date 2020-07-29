import {AnyFunction, NumberOrString, P5, Runnable, StringSupplier} from '../../types'
import {P5Color} from './p5-color'

/**
 *  https://p5js.org/reference/#/p5.Element
 */
export interface P5Element {
  elt: string
  pInst?: P5

  parent: (parent?: Parent) => void
  id: (id?: string) => void
  class: (clazz?: string) => void
  mousePressed: EventFn
  doubleClicked: (fxn: Runnable | boolean) => P5Element
  mouseWheel: EventFn
  mouseReleased: EventFn
  mouseClicked: EventFn
  mouseMoved: EventFn
  mouseOver: EventFn
  mouseOut: EventFn
  touchStarted: EventFn
  touchMoved: EventFn
  touchEnded: EventFn
  dragOver: EventFn
  dragLeave: EventFn
  addClass: ClassConsumer
  removeClass: ClassConsumer
  hasClass: (c: string) => boolean
  toggleClass: (c: string) => void
  child: (child?: string | P5Element) => Node[]
  center: (align?: string) => void
  html: (html?: string, append?: boolean) => string
  position: (positionType?: string | PositionType, x?: number, y?: number) => PositionReturn
  style: (property: string, value?: string | P5Color) => string
  attribute: AttributeFn
  removeAttribute: (attr: string) => void
  value: (value?: NumberOrString) => NumberOrString
  show: Runnable
  hide: Runnable
  size: (w: AutoSize, h: AutoSize) => object
  remove: Runnable
  drop: (callback: AnyFunction, fxn?: AnyFunction) => void
}

export enum PositionType {
  STATIC = 'static',
  FIXED = 'fixed',
  RELATIVE = 'relative',
  STICKY = 'sticky',
  INITIAL = 'initial',
  INHERIT = 'inherit'
}

type Parent = string | P5Element | object

type EventFn = (fxn: Runnable | boolean) => void

type ClassConsumer = (clazz: string) => void

type PositionReturn = { x: number, y: number }

type AttributeFn = ((attr: string, value: string) => string) & StringSupplier

type AutoSize = number | 'AUTO'

