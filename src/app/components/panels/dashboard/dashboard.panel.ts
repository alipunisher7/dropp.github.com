import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { Card, ServiceType } from 'models';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ts-dashboard-panel',
  templateUrl: './dashboard.panel.html',
  styleUrls: ['./dashboard.panel.scss'],
  host: {
    class: 'panel'
  }
})

export class DashboardPanel implements OnInit {
  tripCard: Card;
  driverCard: Card;
  passengerCard: Card;
  organizationCard: Card;
  onlineTripsLoaded: boolean;


  constructor(private _operatorServices: OperatorService, private router: Router,
    private route: ActivatedRoute) {

    this.tripCard = new Card(
      { title: 'سفردر حال انجام' },
      { title: 'سفر های امروز' },
      'link'
    );
    this.driverCard = new Card(
      { title: 'راننده آنلاین' },
      { title: 'کل راننده ها' },
      'link'
    );
    this.passengerCard = new Card(
      { title: 'کاربر جدید' },
      { title: 'کل کاربرها' },
      'link'
    );
    this.organizationCard = new Card(
      { title: 'سازمان جدید' },
      { title: 'سازمان ثبت شده' },
      'link'
    );

  }



  getOnlineTripsCount() {
    // let timer = Observable.timer(2000, 1000);

    this._operatorServices.getOnlineTripsCount().subscribe(data => {
      this.tripCard.info1.data = data.numberOfOnlineTrips;

    })
  }

  getTodayTripsCount() {
    this._operatorServices.getTodayTripsCount().subscribe(data => {
      this.tripCard.info2.data = data.numberOfTodaysTrips;
    })
  }

  getOnlineDriversCount() {
    this._operatorServices.getOnlineDriversCount().subscribe(data => {
      this.driverCard.info1.data = data;
    })
  }

  getDriversCount() {
    this._operatorServices.getDriversCount().subscribe(data => {
      this.driverCard.info2.data = data.numberAllDrivers;
    })
  }

  getNewPassengersCount() {
    this._operatorServices.getNewPassengersCount().subscribe(data => {
      this.passengerCard.info1.data = data.numberOfNewPassengers;
    })
  }

  getPassengersCount() {
    this._operatorServices.getPassengersCount().subscribe(data => {
      this.passengerCard.info2.data = data.numberOfAllPassengers;
    })
  }

  getNewOrganizationsCount() {
    this._operatorServices.getNewOrganizationsCount().subscribe(data => {
      this.organizationCard.info1.data = data.numberOfNewOrganizations;
    })
  }

  getOrganizationsCount() {
    this._operatorServices.getOrganizationsCount().subscribe(data => {
      this.organizationCard.info2.data = data.numberOfAllOrganizations;
    })
  }

  ngOnInit() {
    // this.driverCard.info2.data = this.route.snapshot.data['driversCount'].numberAllDrivers;
    // this.passengerCard.info2.data = this.route.snapshot.data['passengersCount'].numberOfAllPassengers;
    // this.passengerCard.info1.data = this.route.snapshot.data['newPassengersCount'].numberOfNewPassengers;
    // this.tripCard.info2.data = this.route.snapshot.data['todayTripsCount'].numberOfTodaysTrips;
    // this.tripCard.info1.data = this.route.snapshot.data['onlineTripsCount'].numberOfOnlineTrips;
    // this.organizationCard.info2.data = this.route.snapshot.data['organizationCount'].numberOfAllOrganizations;
    // this.organizationCard.info1.data = this.route.snapshot.data['newOrganizationCount'].numberOfNewOrganizations;

    let timer = Observable.timer(1, 60000);
    // timer.subscribe(t => { this.getDriversCount(); });
    timer.subscribe(t => { this.getOnlineTripsCount(); });
    timer.subscribe(t => { this.getTodayTripsCount(); });
    timer.subscribe(t => { this.getDriversCount(); });
    timer.subscribe(t => { this.getNewPassengersCount(); });
    timer.subscribe(t => { this.getPassengersCount(); });
    timer.subscribe(t => { this.getOrganizationsCount(); });
    timer.subscribe(t => { this.getNewOrganizationsCount(); });

    // this.getOnlineDriversCount();
  }
}
