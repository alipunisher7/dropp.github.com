import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { Card, ServiceType  } from 'models';
import {Observable} from 'rxjs/Rx';

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

  constructor(private _operatorServices: OperatorService) {

    this.tripCard = new Card(
      { title: 'سفردر حال انجام' },
      { title: 'سفر های امروز' },
      '111'
    );
    this.driverCard = new Card(
      { title: 'راننده آنلاین' },
      { title: 'کل راننده ها', },
      '222'
    );
    this.passengerCard = new Card(
      { title: 'کاربر جدید' },
      { title: 'کل کاربرها' },
      '333'
    );
    this.organizationCard = new Card(
      { title: 'سازمان جدید' },
      { title: 'سازمان ثبت شده' },
      '444'

    );

  }


  getOnlineTripsCount() {
    let timer = Observable.timer(2000, 1000);
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
    this._operatorServices.getDriversCount().subscribe(

      (services: ServiceType) => {
        console.log(services);
        let sum = 0;

        for (let serviceName in services) {
          if (!services.hasOwnProperty(serviceName)) continue;
          sum += services[serviceName];
        }
        this.driverCard.info2.data = sum;
      },
      error => {
        console.error(error);
      }
    )
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
      this.organizationCard.info1.data = data;
    })
  }

  getOrganizationsCount() {
    this._operatorServices.getOrganizationsCount().subscribe(data => {
      this.organizationCard.info2.data = data.numberOfAllOrganizations;
    })
  }

  ngOnInit() {
    let timer = Observable.timer(1, 60000);
    timer.subscribe(t => { this.getDriversCount(); });
    timer.subscribe(t => { this.getPassengersCount(); });
    timer.subscribe(t => { this.getNewPassengersCount(); });
    timer.subscribe(t => { this.getTodayTripsCount(); });
    timer.subscribe(t => { this.getOnlineTripsCount(); });
    timer.subscribe(t => { this.getOrganizationsCount(); });

    // this.getOnlineDriversCount();
  }
}
