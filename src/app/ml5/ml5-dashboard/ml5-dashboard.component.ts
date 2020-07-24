import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application-service/application.service'

@Component({
  selector: 'app-ml5-dashboard',
  templateUrl: './ml5-dashboard.component.html',
  styleUrls: ['./ml5-dashboard.component.sass']
})
export class ML5DashboardComponent implements OnInit {

  constructor(private applicationService: ApplicationService) {
    this.applicationService.selectedDashboard$.next('ml5')
  }

  ngOnInit(): void {
  }

}
