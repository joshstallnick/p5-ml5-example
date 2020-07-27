import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


const routes: Routes = [
  {path: 'p5/dashboard', loadChildren: () => import('./p5/p5-dashboard/p5-dashboard.module').then(m => m.P5DashboardModule)},
  { path: 'ml5/dashboard', loadChildren: () => import('./ml5/ml5-dashboard/ml5-dashboard.module').then(m => m.ML5DashboardModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
