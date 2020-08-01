import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {P5DashboardRoutingModule} from './p5-dashboard-routing.module'
import {P5DashboardComponent} from './p5-dashboard.component';
import { P5SandboxComponent } from './p5-sandbox/p5-sandbox.component'


@NgModule({
  declarations: [P5DashboardComponent, P5SandboxComponent],
  imports: [
    CommonModule,
    P5DashboardRoutingModule
  ]
})
export class P5DashboardModule {
}
