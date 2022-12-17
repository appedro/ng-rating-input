import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ng-rating-input',
  templateUrl: "./ng-rating-component.html",
  styleUrls: ["ng-rating.component.scss"]
})
export class NgRatingComponent implements OnInit, ControlValueAccessor {

  @Input() highRate: number = 5;
  @Input() icon: string = "star";
  @Input() animation: boolean = true;
  @Input() iconSize: number = 100;
  
  public primaryColorPosition!: number
  public value!: number;

  constructor() { }

  onChange = (rating: number) => {};

  onTouched = () => {};

  writeValue(rating: any): void {    
    this.onChange(rating);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {    
  }

  public getPrimaryColorPosition(event: MouseEvent) : void{         
    this.primaryColorPosition = event.offsetX     
  }

  public getRate(event: any){
    event.target.classList.add("rated")
    setTimeout(()=>{
      event.target.classList.remove("rated")
    }, 600)    
    this.writeValue(this.primaryColorPosition / 100)
  }
}
