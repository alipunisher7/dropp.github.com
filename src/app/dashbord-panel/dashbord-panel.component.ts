import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../Services/operator.service';
import { Card } from './card';

@Component({
  selector: 'ts-dashbord-panel',
  templateUrl: './dashbord-panel.component.html',
  styleUrls: ['./dashbord-panel.component.scss']
})
export class DashbordPanelComponent implements OnInit {
  tripCard: Card;
  driverCard: Card;
  passengerCard: Card;
  OrganizationCard: Card;

  constructor(private _operatorServices: OperatorService) {

    this.tripCard = new Card(
      { title: 'سفردر حال انجام' },
      { title: 'سفر های امروز' }
    );
    this.driverCard = new Card(
      { title: 'راننده آنلاین' },
      { title: 'کل راننده ها' }
    );
    this.passengerCard = new Card(
      { title: 'کاربر جدید' },
      { title: 'کل کاربرها' }
    );
    this.OrganizationCard = new Card(
      { title: 'سازمان جدید' },
      { title: 'سازمان ثبت شده' }

    );

  }
  getOnlineTrips() {
    this._operatorServices.getOnlineTrips().subscribe(data => {
      this.tripCard.IInfo1.data = data;
    })
  }
  getTodayTrips() {
    this._operatorServices.getTodayTrips().subscribe(data => {
      this.tripCard.IInfo2.data = data;
    })
  }
  getOnlineDrivers() {
    this._operatorServices.getOnlineDrivers().subscribe(data => {
      this.driverCard.IInfo1.data = data;
    })
  }
  getAllDrivers() {
    this._operatorServices.getAllDrivers().subscribe(data => {
      this.driverCard.IInfo2.data = data;
    })
  }
  getNewPassengers() {
    this._operatorServices.getNewPassengers().subscribe(data => {
      this.passengerCard.IInfo1.data = data;
    })
  }
  getAllPassengers() {
    this._operatorServices.getAllPassengers().subscribe(data => {
      this.passengerCard.IInfo2.data = data;
    })
  }
  getNewOrganizations() {
    this._operatorServices.getNewOrganizations().subscribe(data => {
      this.OrganizationCard.IInfo1.data = data;
    })
  }
  getAllOrganizations() {
    this._operatorServices.getAllOrganizations().subscribe(data => {
      this.OrganizationCard.IInfo2.data = data;
    })
  }


  ngOnInit() {

  }

}
