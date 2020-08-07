import {AnyFunction, NumberOrString, Runnable} from '../../types'

export interface ML5KNNClassifier {
  addExample: (example: any, indexOrLabel: NumberOrString) => void
  classify: (input: any, k?: number, callback?: AnyFunction) => object
  clearLabel: (indexOrLabel: NumberOrString) => void
  clearAllLabel: Runnable
  getCountByLabel: Runnable
  getCount: Runnable
  getNumLabels: Runnable
  save: (fileName?: string) => any
  load: (path: any, callback?: AnyFunction) => void
}
