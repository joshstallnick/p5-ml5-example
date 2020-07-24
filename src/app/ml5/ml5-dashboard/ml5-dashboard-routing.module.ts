import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {ML5DashboardComponent} from './ml5-dashboard.component'

const routes: Routes = [
  {path: '', component: ML5DashboardComponent},
  {
    path: 'ml5-sandbox',
    loadChildren: () => import('./ml5-sandbox/ml5-sandbox.module').then(m => m.ML5SandboxModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ML5DashboardRoutingModule {
}
