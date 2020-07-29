import {NumberOrString, NumberSupplier, ObjectSupplier, Primitive, Runnable} from '../../types'

export interface P5Table {
  columns: string[]
  rows?: any[]

  addRow: RowFn
  removeRow: (id: number) => void
  getRow: (rowId: number) => P5TableRow
  getRows: () => P5TableRow[]
  findRow: (value: string, column: NumberOrString) => P5TableRow
  findRows: (value: string, column: NumberOrString) => P5TableRow[]
  matchRow: (regexp: string | RegExp, column: NumberOrString) => P5TableRow
  matchRows: MatchRowsFn
  getColumn: (column: NumberOrString) => any[]
  clearRows: Runnable
  addColumn: AddColumnConsumer
  getColumnCount: NumberSupplier
  getRowCount: NumberSupplier
  removeTokens: RemoveTokensConsumer
  trim: TrimConsumer
  removeColumn: (column: NumberOrString) => void
  set: (row: number, column: NumberOrString, value: NumberOrString) => void
  setNum: (row: number, column: NumberOrString, value: number) => void
  setString: (row: number, column: NumberOrString, value: string) => void
  get: (row: number, column: NumberOrString) => NumberOrString
  getNum: (row: number, column: NumberOrString) => number
  getString: (row: number, column: NumberOrString) => string
  getObject: GetObjectFn
  getArray: () => any[]
}

type RowFn = ((row: P5TableRow) => P5TableRow) & (() => P5TableRow)

type MatchRowsFn = ((regexp: string) => P5TableRow[]) & ((regexp: string, column: NumberOrString) => P5TableRow[])

type AddColumnConsumer = ((title: string) => void) & Runnable

type RemoveTokensConsumer = ((chars: string) => void) & ((chars: string, column: NumberOrString) => void)

type TrimConsumer = ((column: NumberOrString) => void) & Runnable

type GetObjectFn = ((headerColumn: string) => object) & ObjectSupplier



export interface P5TableRow {
  str?: string
  separator?: string

  set: RowSetFn
  setNum: RowSetFn
  setString: (column: NumberOrString, value: Primitive) => void
  get: (column: NumberOrString) => NumberOrString
  getNum: (column: NumberOrString) => number
  getString: (column: NumberOrString) => string
}

type RowSetFn = (column: NumberOrString, value: NumberOrString) => void
