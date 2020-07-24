import {AnyFunction, NodeArraySupplier, ObjectSupplier, P5, Runnable, StringSupplier} from '../../types'
import {P5Color} from './p5-color'

export interface P5Element {
  elt: string
  pInst?: P5

  parent: ParentFn                                        // https://p5js.org/reference/#/p5.Element/parent
  id: IdFn                                                // https://p5js.org/reference/#/p5.Element/id
  class: ClassFn                                          // https://p5js.org/reference/#/p5.Element/class
  mousePressed: EventFn                                   // https://p5js.org/reference/#/p5.Element/mousePressed
  doubleClicked: (fxn: Runnable | boolean) => P5Element   // https://p5js.org/reference/#/p5.Element/doubleClicked
  mouseWheel: EventFn                                     // https://p5js.org/reference/#/p5.Element/mouseWheel
  mouseReleased: EventFn                                  // https://p5js.org/reference/#/p5.Element/mouseReleased
  mouseClicked: EventFn                                   // https://p5js.org/reference/#/p5.Element/mouseClicked
  mouseMoved: EventFn                                     // https://p5js.org/reference/#/p5.Element/mouseMoved
  mouseOver: EventFn                                      // https://p5js.org/reference/#/p5.Element/mouseOver
  mouseOut: EventFn                                       // https://p5js.org/reference/#/p5.Element/mouseOut
  touchStarted: EventFn                                   // https://p5js.org/reference/#/p5.Element/touchStarted
  touchMoved: EventFn                                     // https://p5js.org/reference/#/p5.Element/touchMoved
  touchEnded: EventFn                                     // https://p5js.org/reference/#/p5.Element/touchEnded
  dragOver: EventFn                                       // https://p5js.org/reference/#/p5.Element/dragOver
  dragLeave: EventFn                                      // https://p5js.org/reference/#/p5.Element/dragLeave
  addClass: ClassConsumer                                 // https://p5js.org/reference/#/p5.Element/addClass
  removeClass: ClassConsumer                              // https://p5js.org/reference/#/p5.Element/removeClass
  hasClass: (c: string) => boolean                        // https://p5js.org/reference/#/p5.Element/hasClass
  toggleClass: (c: string) => void                        // https://p5js.org/reference/#/p5.Element/toggleClass
  child: ChildFn                                          // https://p5js.org/reference/#/p5.Element/child
  center: CenterFn                                        // https://p5js.org/reference/#/p5.Element/center
  html: HtmlFn                                            // https://p5js.org/reference/#/p5.Element/html
  position: PositionFn                                    // https://p5js.org/reference/#/p5.Element/position
  style: StyleFn                                          // https://p5js.org/reference/#/p5.Element/style
  attribute: AttributeFn                                  // https://p5js.org/reference/#/p5.Element/attribute
  removeAttribute: (attr: string) => void                 // https://p5js.org/reference/#/p5.Element/removeAttribute
  value: ValueFn                                          // https://p5js.org/reference/#/p5.Element/value
  show: Runnable                                          // https://p5js.org/reference/#/p5.Element/show
  hide: Runnable                                          // https://p5js.org/reference/#/p5.Element/hide
  size: SizeFn                                            // https://p5js.org/reference/#/p5.Element/size
  remove: Runnable                                        // https://p5js.org/reference/#/p5.Element/remove
  drop: DropFn                                            // https://p5js.org/reference/#/p5.Element/drop
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

type ParentFn = ((parent: Parent) => void) | Runnable

type IdFn = ((id: string) => void) | Runnable

type ClassFn = ((clazz: string) => void) | Runnable

type EventFn = (fxn: Runnable | boolean) => void

type ClassConsumer = (clazz: string) => void

type ChildFn = ((child: string | P5Element) => Node[]) | NodeArraySupplier

type CenterFn = ((align: string) => void) | Runnable

type HtmlFn = ((html: string) => string) | ((append: boolean) => string) | ((html: string, append: boolean) => string) | Runnable

type PositionReturn = {x: number, y: number}

type PositionFn =
  ((positionType: string | PositionType) => PositionReturn) |
  ((positionType: string | PositionType, x: number) => PositionReturn) |
  ((positionType: string | PositionType, y: number) => PositionReturn) |
  ((positionType: string | PositionType, x: number, y: number) => PositionReturn) |
  Runnable

type StyleFn = ((property: string) => string) | ((property: string, value: string | P5Color) => string)

type AttributeFn = ((attr: string, value: string) => string) | StringSupplier

type ValueFn = ((value: string | number) => string | number) | (() => string | number)

type AutoSize = number | 'AUTO'

type SizeFn = ((w: AutoSize) => object) | ((w: AutoSize, h: AutoSize) => object) | ObjectSupplier

type DropFn = ((callback: AnyFunction) => void) | ((callback: AnyFunction, fxn: AnyFunction) => void)
