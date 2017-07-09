import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { Card, ServiceType  } from 'models';

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

  getOnlineTrips() {
    this._operatorServices.getOnlineTrips().subscribe(data => {
      this.tripCard.info1.data = data;
    })
  }

  getTodayTrips() {
    this._operatorServices.getTodayTrips().subscribe(data => {
      this.tripCard.info2.data = data;
    })
  }

  getOnlineDrivers() {
    this._operatorServices.getOnlineDrivers().subscribe(data => {
      this.driverCard.info1.data = data;
    })
  }

  getAllDrivers() {
    this._operatorServices.getAllDrivers().subscribe(

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

  getNewPassengers() {
    this._operatorServices.getNewPassengers().subscribe(data => {
      this.passengerCard.info1.data = data;
    })
  }

  getAllPassengers() {
    this._operatorServices.getAllPassengers().subscribe(data => {
      this.passengerCard.info2.data = data;
    })
  }

  getNewOrganizations() {
    this._operatorServices.getNewOrganizations().subscribe(data => {
      this.organizationCard.info1.data = data;
    })
  }

  getAllOrganizations() {
    this._operatorServices.getAllOrganizations().subscribe(data => {
      this.organizationCard.info2.data = data;
    })
  }

  ngOnInit() {
    this.getAllDrivers();
  }
}