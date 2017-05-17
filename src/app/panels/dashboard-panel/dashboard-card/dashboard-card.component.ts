import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../models';

@Component({
  selector: 'ts-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
