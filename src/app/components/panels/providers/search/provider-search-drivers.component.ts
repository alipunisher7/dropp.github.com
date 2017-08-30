import { Component, OnInit } from '@angular/core';
import { ProviderService, NotificationService } from 'services';
import { FormControl } from '@angular/forms';
import { Driver, Notification, NotificationTypes, ISearchParam, Error } from 'models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ts-provider-search-drivers',
  templateUrl: './provider-search-drivers.component.html',
  styleUrls: ['./provider-search-drivers.component.scss']
})
export class ProviderSearchDriversComponent implements OnInit {
  search: string = '';
  searchControl = new FormControl();
  drivers: Driver[];
  resultCount = 20;
  page = 0;
  constructor(private _providerservice: ProviderService, private _notificationservice: NotificationService) { }

  searchDrivers() {
    // TODO: count and prefix
    this._providerservice.searchDrivers({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.drivers = res);
  }
  banDriver(driver) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._providerservice.banDriver(driver.username).subscribe(
        res => {
          let notification = new Notification({ title: 'بن شد', info: 'راننده مورد نظر بن شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          driver.accountState = '-1';
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
  unBanDriver(driver) {
    if (confirm('آیا مطمئن هستید؟')) {
      this._providerservice.unBanDriver(driver.username).subscribe(
        res => {
          let notification = new Notification({ title: 'رفع بن شد', info: 'راننده مورد نظر رفع بن شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          driver.accountState = '3';
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
  deactiveDriver(driver) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._providerservice.deactiveDriver(driver.username).subscribe(
        res => {
          let notification = new Notification({ title: 'غیر فعال شد', info: 'راننده مورد نظر غیر فعال شد', type: NotificationTypes.success });
          this._notificationservice.notify(notification);
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
  pay(driver) {
    this._providerservice.driverPay(driver.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'حساب راننده مورد نظر تسویه شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        // let index = this.mddrivers.indexOf(driver);
        // if (index > -1) {
        //   this.mddrivers.splice(index, 1);
        // }
        driver.credit = 0;
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }

  ngOnInit() {
    // debounce keystroke events
    this.searchControl.valueChanges
      .debounceTime(400)
      .subscribe(newValue => {
        this.search = newValue
        this.searchDrivers();
      });

    this.searchDrivers();
  }

}
