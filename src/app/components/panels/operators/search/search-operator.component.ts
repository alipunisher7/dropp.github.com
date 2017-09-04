import { Component, OnInit } from '@angular/core';
import { MasterService, NotificationService, AdminService } from 'services';
import { Operator, Notification, NotificationTypes, Error } from 'models';
@Component({
  selector: 'ts-search-operator',
  templateUrl: './search-operator.component.html',
  styleUrls: ['./search-operator.component.scss']
})
export class SearchOperatorComponent implements OnInit {

  constructor(private _masterService: MasterService, private _notificationservice: NotificationService, private _adminservice: AdminService) { }
  query: string = '';
  operators: Operator[];
  selectedOperator: Operator;
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
  banOperator(operator) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._masterService.banDriver(operator.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `اپراتور مورد نظر بن شد`, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '-1';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد');
    }
  }
  unBanOperator(operator) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._masterService.unBanDriver(operator.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: 'اپراتور مورد نظر رفع بن شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '3';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد');
    }
  }
  banMaster(operator) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._adminservice.banMaster(operator.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `اپراتور ارشد مورد نظر بن شد`, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '-1';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد')
    }
  }
  unBanMaster(operator) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._adminservice.unBanMaster(operator.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: 'اپراتور ارشد مورد نظر رفع بن شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '3';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد');
    }
  }
  masterdelete(operator) {
    if (confirm("آیا مطمئن هستید؟")) {

      this._adminservice.removeOperator(operator.id).subscribe(
        res => {
          let notification = new Notification({ title: 'حذف شد', info: 'اپراتور مورد نظر حذف شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '-2';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      )
    }
    else {
      alert('کنسل شد');
    }
  }
  delete(operator) {
    if (confirm("آیا مطمئن هستید؟")) {

      this._masterService.removeOperator(operator.id).subscribe(
        res => {
          let notification = new Notification({ title: 'حذف شد', info: 'اپراتور مورد نظر حذف شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          operator.accountState = '-2';
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      )
    }
    else {
      alert('کنسل شد');
    }
  }

}
