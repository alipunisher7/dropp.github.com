import { Component, OnInit } from '@angular/core';
import {OperatorService } from 'services';
import { ISubscribeUser, Notification, NotificationTypes, ISearchParam } from 'models';
@Component({
  selector: 'ts-search-subscribes',
  templateUrl: './search-subscribes.component.html',
  styleUrls: ['./search-subscribes.component.scss']
})
export class SearchSubscribesComponent implements OnInit {
  query: string = '';
  subscribeUsers: ISubscribeUser[];
  resultCount = 20;
  page = 0;
  constructor(private _operatorservice: OperatorService) { }

  searchSubscribeUser() {
    this._operatorservice.searchSubscribe({ query: this.query, count: this.resultCount, offset: this.page }).subscribe(res => this.subscribeUsers = res);
  }
  OnSearch() {
    this.searchSubscribeUser();
  }
  ngOnInit() {
    this.searchSubscribeUser();
  }

}
