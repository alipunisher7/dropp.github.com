import { Component, OnInit } from '@angular/core';
import {OperatorService} from 'services';
import {Trip} from 'models';

@Component({
  selector: 'ts-online-trips',
  templateUrl: './online-trips.component.html',
  styleUrls: ['./online-trips.component.scss']
})
export class OnlineTripsComponent implements OnInit {
  trips: Trip[];
  constructor(private _operatorservice: OperatorService) { }
  getOnlineTrips() {
    this._operatorservice.getOnlineTrips().subscribe(res => this.trips = res);
  }

  ngOnInit() {
    this.getOnlineTrips();
  }

}
