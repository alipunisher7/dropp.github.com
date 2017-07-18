import { Component, OnInit } from '@angular/core';
import {ITickets} from 'models';
import {OperatorService } from 'services';

@Component({
  selector: 'ts-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.scss']
})
export class ViewTicketsComponent implements OnInit {
  tickets: ITickets[];
  constructor(private _operatorService: OperatorService) { }
  getUnresolvedTickets() {
    this._operatorService.getTickets().subscribe(res => this.tickets = res);
  }
  ngOnInit() {
    this.getUnresolvedTickets()
  }

}
