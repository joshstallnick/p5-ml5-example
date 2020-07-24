import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../services/application-service/application.service'

@Component({
  selector: 'app-p5-dashboard',
  templateUrl: './p5-dashboard.component.html',
  styleUrls: ['./p5-dashboard.component.sass']
})
export class P5DashboardComponent implements OnInit {

  constructor(private applicationService: ApplicationService) {
    this.applicationService.selectedDashboard$.next('p5')
  }

  ngOnInit(): void {
  }

}
