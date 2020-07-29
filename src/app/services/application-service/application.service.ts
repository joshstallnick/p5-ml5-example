import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

export interface SideNavItem {
  link: string | {outlets: {[name: string]: string[]}}
  icon?: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  selectedDashboard$: BehaviorSubject<'p5' | 'ml5'> = new BehaviorSubject(null)
  subNav$: BehaviorSubject<string> = new BehaviorSubject(null)

  verticalNavOptions = {
    p5: {
      dashboard: {
        items: []
      },
      examples: {
        items: [
          {link: [{ outlets: { exampleDisplay: 'p5/examples/basic' } }], icon: 'new', name: 'Basic'}
        ]
      }
    },
    ml5: {
      dashboard: {
        items: []
      },
      sandbox: {
        items: []
      }
    }
  }

  constructor() { }
}
