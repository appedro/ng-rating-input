import { Component, OnInit, Input } from '@angular/core';
import { RatingIcon, ratingIcons } from './rating.model';

@Component({
  selector: 'app-rating-control',
  templateUrl: './rating-control.component.html',
  styleUrls: ['./rating-control.component.scss']
})
export class RatingControlComponent implements OnInit {
  @Input() name!: string;  
  @Input() primaryColorPosition: number = 100;      
  @Input() size: number = 24;
  
  public gradientId: string = `Gradient${Math.floor(Math.random()*9999)}`;
  public icon!: RatingIcon;

  public numberToPercentage(number: number): string{
    const fixedNumber = number > 99 ? 99 : number; 
    return `${fixedNumber}%`;
  }

  ngOnInit(): void {        
    if(!this.name) throw "Must define icon name";    
    const icon = ratingIcons.find(icon => icon.name == this.name);    
    if(icon) this.icon = icon;
    else this.icon = ratingIcons[0];    
  }
}
