import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {P5Sketch} from '../../shared/interfaces'

type SketchConsumerListSubject = BehaviorSubject<((s: P5Sketch) => void)[]>

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  preloadFns$: SketchConsumerListSubject  = new BehaviorSubject([])
  setupFns$: SketchConsumerListSubject    = new BehaviorSubject([])
  drawFns$: SketchConsumerListSubject     = new BehaviorSubject([])

  private static addOne(subject: SketchConsumerListSubject, fn: (s: P5Sketch) => void) {
    subject.next([...subject.getValue(), fn])
  }

  addOnePreloadFn(fn: (s: P5Sketch) => void) {
    CanvasService.addOne(this.preloadFns$, fn)
  }

  addOneSetupFn(fn: (s: P5Sketch) => void) {
    CanvasService.addOne(this.setupFns$, fn)
  }

  addOneDrawFn(fn: (s: P5Sketch) => void) {
    CanvasService.addOne(this.drawFns$, fn)
  }
}
