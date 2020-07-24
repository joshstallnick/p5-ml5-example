import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  selectedDashboard: 'p5' | 'ml5'

  selectedLinkRefs: { link: string, name: string }[]

  linkRefs = {
    p5: [{link: '/p5-dashboard', name: 'Dashboard'}, {link: '/p5-dashboard/p5-example-section', name: 'Example Section'}],
    ml5: [{link: '/ml5-dashboard', name: 'Dashboard'}, {link: '/ml5-dashboard/ml5-sandbox', name: 'Sandbox'}]
  }

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const route = this.router.routerState.snapshot.url

    console.log(this.router)
    this.router.getCurrentNavigation()

    console.log(this.router)

    if (route.includes('p5-dashboard')) {
      this.selectDashboard('p5')
    } else if (route.includes('ml5-dashboard')) {
      this.selectDashboard('ml5')
    }
  }

  selectDashboard(choice: 'p5' | 'ml5') {
    console.log('hits this', choice)
    this.selectedDashboard = choice
    this.selectedLinkRefs = this.linkRefs[choice]
  }
}
