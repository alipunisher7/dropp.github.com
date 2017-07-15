import { Component, OnInit, ElementRef } from '@angular/core';
import { OperatorService, NotificationService} from 'services';
import { Driver, Notification, NotificationTypes,ISearchParam } from 'models';

@Component({
  selector: 'ts-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.scss']
})
export class SearchDriversComponent implements OnInit {

  query: string = '';
  drivers: Driver[];
  selectedDriver: Driver;
  resultCount = 20;
  page = 0;

  constructor(private _operatorServices: OperatorService, private _notification: NotificationService, private _el: ElementRef) {
  }

  searchDrivers() {
    // TODO: count and prefix
    this._operatorServices.searchDrivers({query: this.query, count: this.resultCount, offset: this.page}).subscribe(res => this.drivers = res);
  }

  ngOnInit() {
    // const el = this._el.nativeElement.k
    this.searchDrivers();
  }

  OnSearch() {
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
