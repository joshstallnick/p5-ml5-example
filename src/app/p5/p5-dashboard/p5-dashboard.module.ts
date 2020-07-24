import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {P5DashboardRoutingModule} from './p5-dashboard-routing.module'
import {P5DashboardComponent} from './p5-dashboard.component'


@NgModule({
  declarations: [P5DashboardComponent],
  imports: [
    CommonModule,
    P5DashboardRoutingModule
  ]
})
export class P5DashboardModule {
}
