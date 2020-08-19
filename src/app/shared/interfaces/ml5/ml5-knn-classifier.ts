import {AnyFunction, NumberOrString, NumberSupplier, Runnable} from '../../types'

export interface ML5KNNClassifier {
  addExample: (example: any, indexOrLabel: NumberOrString) => void
  classify: ((input: any, k?: number, callback?: AnyFunction) => object) & ((input: any, callback?: AnyFunction) => object)
  clearLabel: (indexOrLabel: NumberOrString) => void
  clearAllLabel: Runnable
  getCountByLabel: Runnable
  getCount: Runnable
  getNumLabels: NumberSupplier
  save: (fileName?: string) => any
  load: (path: any, callback?: AnyFunction) => void
}
