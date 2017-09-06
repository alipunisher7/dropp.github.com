import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperatorService, NotificationService } from 'services';
import { IDriverCredit, Notification, NotificationTypes, Error } from 'models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ts-payment-req',
  templateUrl: './payment-req.component.html',
  styleUrls: ['./payment-req.component.scss']
})
export class PaymentReqComponent implements OnInit {
  search: string = '';
  searchControl = new FormControl();
  driversCredit: IDriverCredit[];
  resultCount = 20;
  page = 0;
  constructor(private _operatorServices: OperatorService, private _notificationservice: NotificationService) { }

  // searchDrivers() {
  //   // TODO: count and prefix
  //   this._operatorServices.searchDrivers({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.driversCredit = res);
  // }

  ngOnInit() {
    // debounce keystroke events
    // this.searchControl.valueChanges
    //   .debounceTime(400)
    //   .subscribe(newValue => {
    //     this.search = newValue
    //     this.searchDrivers();
    //   });
    //
    // this.searchDrivers();
  }
  // onPaymet(driver) {
  //   this._operatorServices.paymnet(driver.username).subscribe(
  //     res => {
  //       let notification = new Notification({ title: 'ثبت شد', info: 'موجودی حساب راننده پرداخت شد', type: NotificationTypes.success });
  //       this._notificationservice.notify(notification);
  //     },
  //     error => {
  //       let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
  //       this._notificationservice.notify(notification);
  //     }
  //   )
  // }

}
