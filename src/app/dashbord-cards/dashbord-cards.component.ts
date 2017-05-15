import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-dashbord-cards',
  templateUrl: './dashbord-cards.component.html',
  styleUrls: ['./dashbord-cards.component.scss']
})
export class DashbordCardsComponent implements OnInit {
  @Input() cardInput: { title1: string, number1: number, title2: string, number2: number, link: string };
  constructor() { }

  ngOnInit() {

  }

}
