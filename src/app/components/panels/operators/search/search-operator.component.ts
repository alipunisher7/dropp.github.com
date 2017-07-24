import { Component, OnInit } from '@angular/core';
import {MasterService, NotificationService} from 'services';
import {IOperator, Notification, NotificationTypes} from 'models';
@Component({
  selector: 'ts-search-operator',
  templateUrl: './search-operator.component.html',
  styleUrls: ['./search-operator.component.scss']
})
export class SearchOperatorComponent implements OnInit {

  constructor(private _masterService: MasterService, private _notification: NotificationService) { }
  query: string = '';
  operators: IOperator[];
  selectedOperator: IOperator;
  resultCount = 20;
  page = 0;
  searchOperators() {
    this._masterService.searchOperators({ query: this.query, count: this.resultCount, offset: this.page }).subscribe(res => this.operators = res);
  }
  OnSearch() {
    this.searchOperators();
  }
  ngOnInit() {
    this.searchOperators();
  }
  onMoreClick(operator) {
    this.selectedOperator = operator;
  }
  banOperator(username) {
    this._masterService.banDriver(username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `اپراتور مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }
  unBanOperator(username) {
    this._masterService.unBanDriver(username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'اپراتور مورد نظر رفع بن شد', type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }

}
