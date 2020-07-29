import {Runnable} from '../../types'

export interface P5PrintWriter {
  write: DataConsumer
  print: DataConsumer
  clear: Runnable
  close: Runnable
}

type DataConsumer = (data: any[]) => void
