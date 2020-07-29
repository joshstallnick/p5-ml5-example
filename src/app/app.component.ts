import {Component} from '@angular/core'
import {ApplicationService, SideNavItem} from './services/application-service/application.service'
import {combineLatest} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  selectedLinkRefs: { link: string, name: string }[]

  linkRefs = {
    p5: [{link: '/p5/dashboard', name: 'Dashboard'}, {link: '/p5/dashboard/examples', name: 'Example Section'}],
    ml5: [{link: '/ml5/dashboard', name: 'Dashboard'}, {link: '/ml5/dashboard/sandbox', name: 'Sandbox'}]
  }

  vertNav: SideNavItem[] = []

  constructor(private applicationService: ApplicationService) {
    combineLatest([applicationService.selectedDashboard$, applicationService.subNav$]).subscribe((parts) => {
      const dashboard = parts[0]
      const sub = parts[1]

      if (dashboard) {
        this.selectedLinkRefs = this.linkRefs[dashboard]

        if (sub) {
          const section = applicationService.verticalNavOptions[dashboard]
          const subSection = section[sub]

          this.vertNav = subSection.items
        }
      }
    })

  }

  selectDashboard(choice: 'p5' | 'ml5') {
    this.applicationService.selectedDashboard$.next(choice)
    this.applicationService.subNav$.next('dashboard')
  }
}
