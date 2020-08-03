import {Component, OnDestroy} from '@angular/core'
import 'p5/lib/addons/p5.sound'
import {ApplicationService} from '../../../services/application-service/application.service'
import {ExampleService} from '../../../services/example-service/example.service'

@Component({
  selector: 'app-p5-example-section',
  templateUrl: './p5-example-section.component.html',
  styleUrls: ['./p5-example-section.component.sass']
})
export class P5ExampleSectionComponent implements OnDestroy {
  canvas

  constructor(private applicationService: ApplicationService, public exampleService: ExampleService) {
    applicationService.changeLocation('p5', 'examples')

    exampleService.getExample(['simulate', 'particles'])
  }

  ngOnDestroy(): void {
    this.exampleService.clearMain()
  }

}
