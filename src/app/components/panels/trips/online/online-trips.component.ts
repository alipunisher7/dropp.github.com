import { Component, OnInit } from '@angular/core';
import {OperatorService} from 'services';
import {Trip} from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-online-trips',
  templateUrl: './online-trips.component.html',
  styleUrls: ['./online-trips.component.scss']
})
export class OnlineTripsComponent implements OnInit {
  trips: Trip[];
  constructor(private _operatorservice: OperatorService, private router: Router,
    private route: ActivatedRoute) { }
  // getOnlineTrips() {
  //   this._operatorservice.getOnlineTrips().subscribe(res => this.trips = res);
  // }

  ngOnInit() {
    // this.getOnlineTrips();
    this.trips = this.route.snapshot.data['onlineTrips'];
  }

}
