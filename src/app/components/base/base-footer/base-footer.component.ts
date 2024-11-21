import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  templateUrl: './base-footer.component.html',
  styleUrl: './base-footer.component.scss'
})
export class BaseFooterComponent {

    revealed = false;

    reveal(){
      this.revealed = true;
    }

    @HostListener('mouseleave')
    hide(){
      this.revealed = false;
    }
}
