import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ML5SandboxComponent } from './ml5-sandbox.component';

const routes: Routes = [{ path: '', component: ML5SandboxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ML5SandboxRoutingModule { }
