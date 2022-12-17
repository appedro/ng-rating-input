import { Component, OnInit, Input } from '@angular/core';
import { RatingIcon } from './rating.model';

export const ratingIcons: Array<RatingIcon> = [{
  name: "star",
  path: `M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z`,
  color: "#eee",
  hlColor: "rgb(238, 180, 22)"
},
{
  name: "heart",
  path: `M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z`,
  color: "#eee",
  hlColor: "rgb(219, 70, 70)"
},]
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
    const icon = ratingIcons.find((icon: RatingIcon) => icon.name == this.name);    
    if(icon) this.icon = icon;
    else this.icon = ratingIcons[0];    
  }
}
