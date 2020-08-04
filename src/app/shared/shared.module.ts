import {NgModule} from '@angular/core'
import {LineGraphComponent} from './components/line-graph/line-graph.component'

@NgModule({
  declarations: [LineGraphComponent],
  exports: [
    LineGraphComponent
  ]
})
export class SharedModule {}
