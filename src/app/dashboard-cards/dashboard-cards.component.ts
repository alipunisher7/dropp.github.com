import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
  @Input() cardInput: { title1: string, number1: number, title2: string, number2: number, link: string };
  constructor() { }

  ngOnInit() {

  }

}
