import {NgModule} from '@angular/core'
import {LineGraphComponent} from './components/line-graph/line-graph.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PieGraphComponent } from './components/pie-graph/pie-graph.component';
import { CanvasComponent } from './components/canvas/canvas.component'

@NgModule({
  declarations: [LineGraphComponent, BarGraphComponent, PieGraphComponent, CanvasComponent],
  exports: [
    LineGraphComponent,
    BarGraphComponent,
    PieGraphComponent,
    CanvasComponent
  ]
})
export class SharedModule {}
