import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P5ExampleSectionComponent } from './p5-example-section.component';

const routes: Routes = [{ path: '', component: P5ExampleSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class P5ExampleSectionRoutingModule { }
