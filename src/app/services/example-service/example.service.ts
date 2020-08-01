import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {P5Container} from '../../shared/classes'
import {SubSectionItem} from '../application-service/application.service'
import {examples} from './examples'

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  focus$: BehaviorSubject<P5Container> = new BehaviorSubject(P5Container.default())
  main$: BehaviorSubject<{ name: string, buttons: SubSectionItem[] }> = new BehaviorSubject(null)


  constructor() { }

  getExample(link: string[]) {
    const section = examples[link[0]]

    const subSection = section[link[1]]

    this.setMain(section.main)

    if (subSection) {
      this.setFocus(subSection)
    }
  }

  setFocus(containerSupplier: () => P5Container) {
    this.focus$.getValue().tearDown()
    const container = containerSupplier()
    this.focus$.next(container)
  }

  setMain(main: { name: string, buttons: SubSectionItem[] }) {
    this.main$.next(main)
  }

  clearMain() {
    console.log('nulll')
    this.main$.next(null)
  }
}
