import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { IPassenger, Notification, NotificationTypes, ISearchParam } from 'models';

@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {

  query: string = '';
  passengers: IPassenger[];
  selectedPassenger: IPassenger;

  constructor(private _operatorServices: OperatorService, private _notification: NotificationService) { }

  searchPassengers() {
    this._operatorServices.searchPassengers({query: this.query}).subscribe(res => this.passengers = res);
  }

  ngOnInit() {
  }

  OnSearch() {
    this.searchPassengers();
  }
  onMoreClick(data) {
    this.selectedPassenger = data;
  }
  banPassenger(data) {
    this._operatorServices.banPassenger(data).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر بن شد`, type: NotificationTypes.success });
        this._notification.notify(notification);
      },
      err => {
        alert(err);
      }
    );
  }
}
