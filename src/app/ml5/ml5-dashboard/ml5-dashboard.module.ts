import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ML5DashboardRoutingModule } from './ml5-dashboard-routing.module';
import { ML5DashboardComponent } from './ml5-dashboard.component';


@NgModule({
  declarations: [ML5DashboardComponent],
  imports: [
    CommonModule,
    ML5DashboardRoutingModule
  ]
})
export class ML5DashboardModule { }
