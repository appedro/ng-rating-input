import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgRatingModule } from 'ng-rating';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
