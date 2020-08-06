import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {P5Sketch} from '../../shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  drawFns$: BehaviorSubject<((s: P5Sketch) => void)[]> = new BehaviorSubject([])

  constructor() { }

  addOneDrawFn(fn: (s: P5Sketch) => void) {
    this.drawFns$.next([...this.drawFns$.getValue(), fn])
  }
}
