import {BooleanSupplier, NumberOrString, NumberSupplier, StringArraySupplier, StringSupplier} from '../../types'

export interface P5XML {
  getParent: () => P5XML
  getName: () => StringSupplier
  setName: (the: string) => void
  hasChildren: BooleanSupplier
  listChildren: StringArraySupplier
  getChildren: GetChildrenFn
  getChild: (name: NumberOrString) => P5XML
  addChild: (node: P5XML) => void
  removeChild: (name: NumberOrString) => void
  getAttributeCount: NumberSupplier
  listAttributes: StringArraySupplier
  hasAttribute: (the: string) => boolean
  getNum: GetNumFn
  getString: GetStringFn
  setAttribute: (name: string, value: number | string | boolean) => void
  getContent: GetContentFn
  setContent: (text: string) => void
  serialize: StringSupplier
}

type GetChildrenFn = ((name: string) => P5XML[]) & (() => P5XML[])

type GetNumFn = ((name: string) => number) & ((name: string, defaultValue: number) => number)

type GetStringFn = ((name: string) => string) & ((name: string, defaultValue: number) => string)

type GetContentFn = ((defaultValue: string) => string) & StringSupplier
