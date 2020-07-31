import {Component} from '@angular/core'
import 'p5/lib/addons/p5.sound'
import {ApplicationService} from '../../../services/application-service/application.service'
import {ExampleService} from '../../../services/example-service/example.service'

@Component({
  selector: 'app-p5-example-section',
  templateUrl: './p5-example-section.component.html',
  styleUrls: ['./p5-example-section.component.sass']
})
export class P5ExampleSectionComponent {
  canvas

  constructor(private applicationService: ApplicationService, public exampleService: ExampleService) {
    applicationService.selectedDashboard$.next('p5')
    applicationService.subNav$.next('examples')

    exampleService.getExample(['simulate', 'multipleParticleSystems'])
  }
}
