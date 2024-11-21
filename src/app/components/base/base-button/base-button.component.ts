import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {

  constructor(
    @Attribute('high') public high:any,
    @Attribute('low') public low:any,
  ){
    console.log(high,low)
  }

} 
