import {BooleanSupplier, NumberOrString, NumberSupplier, StringArraySupplier, StringSupplier} from '../../types'

export interface P5XML {
  getParent: () => P5XML
  getName: () => StringSupplier
  setName: (the: string) => void
  hasChildren: BooleanSupplier
  listChildren: StringArraySupplier
  getChildren: (name?: string) => P5XML[]
  getChild: (name: NumberOrString) => P5XML
  addChild: (node: P5XML) => void
  removeChild: (name: NumberOrString) => void
  getAttributeCount: NumberSupplier
  listAttributes: StringArraySupplier
  hasAttribute: (the: string) => boolean
  getNum: GetFn<number>
  getString: GetFn<string>
  setAttribute: (name: string, value: number | string | boolean) => void
  getContent: (defaultValue?: string) => string
  setContent: (text: string) => void
  serialize: StringSupplier
}

type GetFn<T> = (name: string, defaultValue?: number) => T
