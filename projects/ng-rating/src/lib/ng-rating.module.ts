import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgRatingComponent } from './ng-rating.component';
import { RatingControlModule } from './rating-control/rating-control.module';



@NgModule({
  declarations: [
    NgRatingComponent
  ],
  imports: [
    CommonModule,
    RatingControlModule
  ],
  exports: [
    NgRatingComponent
  ]
})
export class NgRatingModule { }
