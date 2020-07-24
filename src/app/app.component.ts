import {Component} from '@angular/core'
import {ApplicationService} from './services/application-service/application.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  selectedLinkRefs: { link: string, name: string }[]

  linkRefs = {
    p5: [{link: '/p5-dashboard', name: 'Dashboard'}, {link: '/p5-dashboard/p5-example-section', name: 'Example Section'}],
    ml5: [{link: '/ml5-dashboard', name: 'Dashboard'}, {link: '/ml5-dashboard/ml5-sandbox', name: 'Sandbox'}]
  }

  constructor(private applicationService: ApplicationService) {
    applicationService.selectedDashboard$.subscribe(choice => {
      if (choice) {
        this.selectedLinkRefs = this.linkRefs[choice]
      }
    })
  }

  selectDashboard(choice: 'p5' | 'ml5') {
    this.applicationService.selectedDashboard$.next(choice)
  }
}
