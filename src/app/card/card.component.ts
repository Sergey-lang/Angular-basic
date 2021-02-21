import {Component, Input, OnInit} from '@angular/core';
import {CardI} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: CardI;
  @Input() index: number;

  cardDate: Date = new Date();

  title = ' My Card title';
  text = ' My sample title';
  textColor: string;

  ngOnInit(): void {

  }

  changeTitle(): void {
    this.card.title = 'new title';
  }

  inputHandler(value): void {
    this.title = value;
  }

  changeHandler(): void {
    console.log(this.title);
  }
}
