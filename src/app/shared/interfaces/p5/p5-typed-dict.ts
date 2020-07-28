import {NumberSupplier, Runnable} from '../../types'

export interface P5TypedDict {
  size: NumberSupplier
  hasKey: KeyConsumer
  get: (the: P5TypedDictItem) => P5TypedDictItem
  set: SetConsumer
  create: CreateConsumer
  clear: Runnable
  remove: KeyConsumer
  print: Runnable
  keyArray: DictArraySupplier
  values: DictArraySupplier
  valueArray: DictArraySupplier
  saveTable: Runnable
  saveJSON: Runnable
}

type P5TypedDictItem = number | string

type KeyConsumer = (key: P5TypedDictItem) => boolean

type SetConsumer = (key: P5TypedDictItem, value: P5TypedDictItem) => void

type CreateConsumer = SetConsumer & ((obj: object) => void)

type DictArraySupplier = () => string[] | number[]
