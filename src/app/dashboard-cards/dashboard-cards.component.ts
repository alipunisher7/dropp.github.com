import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../dashboard-panel/card';

@Component({
  selector: 'ts-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss']
})
export class DashboardCardsComponent implements OnInit {
  @Input() cardInput: Card;
  constructor() { }

  ngOnInit() {

  }

}
