import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ML5SandboxRoutingModule } from './ml5-sandbox-routing.module';
import { ML5SandboxComponent } from './ml5-sandbox.component';


@NgModule({
  declarations: [ML5SandboxComponent],
  imports: [
    CommonModule,
    ML5SandboxRoutingModule
  ]
})
export class ML5SandboxModule { }
