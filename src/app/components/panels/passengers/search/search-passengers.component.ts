import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { Passenger, Notification, NotificationTypes, ISearchParam } from 'models';

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

  constructor(private _operatorServices: OperatorService, private _notification: NotificationService) { }

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
    let username = passenger.username;
    this._operatorServices.banPassenger(username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
        passenger.stateCode = '-1';
      },
      err => {
        alert(err);
      }
    );
  }
  unBanPassenger(passenger) {
    let data = passenger.username;
    this._operatorServices.unBanPassenger(data).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر رفع بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
        passenger.stateCode = '1';
      },
      err => {
        alert(err);
      }
    );
  }
}
