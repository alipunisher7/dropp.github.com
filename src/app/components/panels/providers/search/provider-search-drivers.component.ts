import { Component, OnInit } from '@angular/core';
import {ProviderService, NotificationService} from 'services';
import { FormControl } from '@angular/forms';
import { IDriverDebt, Notification, NotificationTypes, ISearchParam } from 'models';
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
  drivers: IDriverDebt[];
  resultCount = 20;
  page = 0;
  constructor(private _providerservice: ProviderService, private _notification: NotificationService) { }

  searchDrivers() {
    // TODO: count and prefix
    this._providerservice.searchDrivers({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.drivers = res);
  }
  banDriver(driver) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._providerservice.banDriver(driver.username).subscribe(
        res => {
          let notification = new Notification({ title: 'بن شد', info: 'راننده مورد نظر بن شد', type: NotificationTypes.success });
          this._notification.notify(notification);
        },
        err => {
          alert(err);
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
          this._notification.notify(notification);
        },
        err => {
          alert(err);
        }
      )
    }
    else {
      alert('کنسل شد');
    }
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
