import {Component} from '@angular/core';

export interface CardI {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true;
  cards: CardI[] = [
    {title: 'Card 1', text: 'This is card number 1'},
    {title: 'Card 2', text: 'This is card number 2'},
    {title: 'Last card 3', text: 'This is card number 3'},
  ];

  toggleCards(): void {
    this.toggle = !this.toggle;
  }
}
