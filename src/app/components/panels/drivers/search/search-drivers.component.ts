import { Component, OnInit, ElementRef } from '@angular/core';
import { OperatorService, NotificationService} from '../../../../services';
import { IDriver, Notification, NotificationTypes } from '../../../../models';

@Component({
  selector: 'ts-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.scss']
})
export class SearchDriversComponent implements OnInit {
  query: string;
  drivers: IDriver[];
  selectedDriver: IDriver;

  constructor(private _operatorServices: OperatorService, private _notification: NotificationService, private _el: ElementRef) {
  }

  searchDrivers() {
    this._operatorServices.searchDrivers(this.query).subscribe(res => this.drivers = res);
  }

  ngOnInit() {
    const el = this._el.nativeElement.k
  }

  OnSearch() {
    this.searchDrivers();
  }

  onMoreClick(data) {
    this.selectedDriver = data;
  }

  banDriver(data) {
    this._operatorServices.banDriver(data).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `راننده مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }

}
