import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {P5DashboardComponent} from './p5-dashboard.component'
import {P5SandboxComponent} from './p5-sandbox/p5-sandbox.component'

const routes: Routes = [
  {path: '', component: P5DashboardComponent},
  {path: 'examples', loadChildren: () => import('./p5-example-section/p5-example-section.module').then(m => m.P5ExampleSectionModule)},
  {path: 'sandbox', component: P5SandboxComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P5DashboardRoutingModule {
}
