import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingControlComponent } from './rating-control.component';



@NgModule({
  declarations: [RatingControlComponent],
  imports: [
    CommonModule
  ],
  exports: [RatingControlComponent]
})
export class RatingControlModule { }
