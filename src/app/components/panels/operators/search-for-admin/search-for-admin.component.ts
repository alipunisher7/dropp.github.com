import { Component, OnInit } from '@angular/core';
import {AdminService, NotificationService} from 'services';
import {IOperator, Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-search-for-admin',
  templateUrl: './search-for-admin.component.html',
  styleUrls: ['./search-for-admin.component.scss']
})
export class SearchForAdminComponent implements OnInit {

  constructor(private _adminservice: AdminService, private _notification: NotificationService) { }
  query: string = '';
  operators: IOperator[];
  selectedOperator: IOperator;
  resultCount = 20;
  page = 0;
  searchOperators() {
    // this._adminservice.searchOperators({ query: this.query, count: this.resultCount, offset: this.page }).subscribe(res => this.operators = res);
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
  banMaster(username) {
    this._adminservice.banMaster(username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `اپراتور مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }
  unBanMaster(username) {
    this._adminservice.unBanMaster(username).subscribe(
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
