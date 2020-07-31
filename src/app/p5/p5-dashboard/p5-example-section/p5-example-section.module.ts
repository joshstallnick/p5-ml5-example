import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {P5ExampleSectionRoutingModule} from './p5-example-section-routing.module'
import {P5ExampleSectionComponent} from './p5-example-section.component'
import {ClarityModule} from '@clr/angular'


@NgModule({
  declarations: [P5ExampleSectionComponent],
  imports: [
    CommonModule,
    P5ExampleSectionRoutingModule,
    ClarityModule
  ]
})
export class P5ExampleSectionModule {
}
