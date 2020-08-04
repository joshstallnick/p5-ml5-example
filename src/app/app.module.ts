import {BrowserModule} from '@angular/platform-browser'
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ClarityModule} from '@clr/angular'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {CommonModule} from '@angular/common'
import {SharedModule} from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
