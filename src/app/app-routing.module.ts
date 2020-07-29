import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {P5BasicExampleComponent} from './p5/p5-dashboard/p5-example-section/p5-basic-example/p5-basic-example.component'
import {P5StructureExampleComponent} from './p5/p5-dashboard/p5-example-section/p5-structure-example/p5-structure-example.component'


const routes: Routes = [
  {path: 'p5/dashboard', loadChildren: () => import('./p5/p5-dashboard/p5-dashboard.module').then(m => m.P5DashboardModule)},
  {path: 'ml5/dashboard', loadChildren: () => import('./ml5/ml5-dashboard/ml5-dashboard.module').then(m => m.ML5DashboardModule)},
  {
    path: 'p5/examples/basic',
    component: P5BasicExampleComponent,
    outlet: 'exampleDisplay'
  },
  {
    path: 'p5/examples/structure',
    component: P5StructureExampleComponent,
    outlet: 'exampleDisplay'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
