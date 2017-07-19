import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperatorService, NotificationService} from 'services';
import { Driver, Notification, NotificationTypes, ISearchParam } from 'models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ts-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.scss']
})
export class SearchDriversComponent implements OnInit {

  search: string = '';
  searchControl = new FormControl();
  drivers: Driver[];
  selectedDriver: Driver;
  resultCount = 20;
  page = 0;

  constructor(private _operatorServices: OperatorService, private _notification: NotificationService) {
  }

  searchDrivers() {
    // TODO: count and prefix
    this._operatorServices.searchDrivers({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.drivers = res);
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

  onMoreClick(data) {
    this.selectedDriver = new Driver(data);
  }

  banDriver(data) {
    this._operatorServices.banDriver(data).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `راننده مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
        console.log('res: ', res);
        console.log('drivers: ', this.drivers);
        // TODO: UPDATE UI
      },
      err => {
        alert(err);
      }
    );
  }

}
