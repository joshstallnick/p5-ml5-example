import {P5TypedDict} from './p5-typed-dict'
import {Runnable} from '../../types'

export interface P5StringDict extends P5TypedDict {
  sortKeys: Runnable
  sortKeysReverse: Runnable
  sortValues: Runnable
  sortValuesReverse: Runnable
}
