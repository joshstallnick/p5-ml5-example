import {AnyFunction, NumberSupplier, Runnable} from '../../types'
import {P5Element} from './p5-element'

export interface P5MediaElement extends P5Element {
  elt: string
  src: string

  play: Runnable
  stop: Runnable
  pause: Runnable
  loop: Runnable
  noLoop: Runnable
  autoplay: (shouldAutoplay: boolean) => void
  volume: (val: number) => number & NumberSupplier
  speed: (speed: number) => number & NumberSupplier
  time: (time: number) => number & NumberSupplier
  duration: NumberSupplier
  onended: (callback: AnyFunction) => void
  connect: (audioNode: AudioNode | any) => void
  disconnect: Runnable
  showControls: Runnable
  hideControls: Runnable
  addCue: AddCueFn
  removeCue: CueIdFn
  clearCues: CueIdFn
}

type AddCueFn =
  ((time: number, callback: AnyFunction) => number) &
  ((time: number, callback: AnyFunction, value: any) => number)

type CueIdFn = (id: number) => void
