import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {ExampleService} from '../example-service/example.service'
import {AnyFunction} from '../../shared/types'

export interface SubSection {
  linkCall: AnyFunction,
  items: SubSectionItem[]
}

export interface SubSectionItem {
  link: string[] | string
  icon?: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  selectedDashboard$: BehaviorSubject<'p5' | 'ml5'> = new BehaviorSubject(null)
  subNav$: BehaviorSubject<string> = new BehaviorSubject(null)

  // this is used to create a vertical nav if needed
  verticalNavOptions = {
    p5: {
      dashboard: {
        items: []
      },
      examples: {
        linkCall: (link: string[]) => this.exampleService.getExample(link),
        items: [
          {link: ['basic', 'circle'], icon: 'new', name: 'Basic'},
          {link: ['structure', 'coordinates'], icon: 'grid-chart', name: 'Structure'},
          {link: ['simulate', 'forces'], icon: 'network-globe', name: 'Simulate'}
        ]
      },
      sandbox: {
        items: []
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

  constructor(private exampleService: ExampleService) {
  }

  changeLocation(nav: 'p5' | 'ml5', subNav: string) {
    this.selectedDashboard$.next(nav)
    this.subNav$.next(subNav)
  }
}
