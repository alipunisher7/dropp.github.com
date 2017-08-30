import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { Passenger, Notification, NotificationTypes, ISearchParam, Error } from 'models';

@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {

  query: string = '';
  passengers: Passenger[];
  selectedPassenger: Passenger;
  resultCount = 20;
  page = 0;

  constructor(private _operatorServices: OperatorService, private _notificationservice: NotificationService) { }

  searchPassengers() {
    this._operatorServices.searchPassengers({ query: this.query, count: this.resultCount, offset: this.page }).subscribe(res => this.passengers = res);
  }

  ngOnInit() {
    this.searchPassengers();
  }

  OnSearch() {
    this.searchPassengers();
  }
  onMoreClick(data) {
    this.selectedPassenger = data;
  }
  banPassenger(passenger: Passenger) {
    if (confirm('آیا مطمئن هستید؟')) {

      let username = passenger.username;
      this._operatorServices.banPassenger(username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر بن شد`, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          passenger.stateCode = '-1';
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
  unBanPassenger(passenger) {
    if (confirm('آیا مطمئن هستید؟')) {

      let data = passenger.username;
      this._operatorServices.unBanPassenger(data).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر رفع بن شد`, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          passenger.stateCode = '1';
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
}
