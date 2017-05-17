import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../services/operator.service';
import { Card } from './card';

@Component({
  selector: 'ts-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.scss'],
  host: {
    class: 'panel row'
  }
})
export class DashboardPanelComponent implements OnInit {
  tripCard: Card;
  driverCard: Card;
  passengerCard: Card;
  OrganizationCard: Card;

  constructor(private _operatorServices: OperatorService) {

    this.tripCard = new Card(
      { title: 'سفردر حال انجام' },
      { title: 'سفر های امروز' },
      '111'
    );
    this.driverCard = new Card(
      { title: 'راننده آنلاین' },
      { title: 'کل راننده ها' },
      '222'
    );
    this.passengerCard = new Card(
      { title: 'کاربر جدید' },
      { title: 'کل کاربرها' },
      '333'
    );
    this.OrganizationCard = new Card(
      { title: 'سازمان جدید' },
      { title: 'سازمان ثبت شده' },
      '333'

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
    this._operatorServices.getAllDrivers().subscribe(data => {
      this.driverCard.info2.data = data;
    })
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
      this.OrganizationCard.info1.data = data;
    })
  }
  getAllOrganizations() {
    this._operatorServices.getAllOrganizations().subscribe(data => {
      this.OrganizationCard.info2.data = data;
    })
  }

  ngOnInit() {

  }

}
