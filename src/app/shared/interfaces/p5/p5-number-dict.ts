import {NumberSupplier} from '../../types'
import {P5TypedDict} from './p5-typed-dict'

export interface P5NumberDict extends P5TypedDict{
  add: KeyValueConsumer
  sub: KeyValueConsumer
  mult: KeyValueConsumer
  div: KeyValueConsumer
  minValue: NumberSupplier
  maxValue: NumberSupplier
  minKey: NumberSupplier
  maxKey: NumberSupplier
}

type KeyValueConsumer = (key: number, num: number) => void
