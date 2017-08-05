import { Component, OnInit } from '@angular/core';
import {ProviderService, NotificationService} from 'services';
import {IDriverDebt, Notification, NotificationTypes} from 'models';
@Component({
  selector: 'ts-drivers-debt',
  templateUrl: './drivers-debt.component.html',
  styleUrls: ['./drivers-debt.component.scss']
})
export class DriversDebtComponent implements OnInit {

  constructor(private _providerservice: ProviderService, private _notificationservice: NotificationService) { }
  drivers: IDriverDebt[];
  mddrivers: IDriverDebt[];
  gtdrivers: IDriverDebt[];
  value: string = '';
  getDriversDebt() {
    this._providerservice.getDriversDebt().subscribe(res => this.drivers = res)
  }
  getDriversMostDebt() {
    this._providerservice.getDriversMostDebt().subscribe(res => this.mddrivers = res)
  }
  onSubmit() {
    let val = -this.value;
    this._providerservice.getdriverDebtgt(val).subscribe(res => this.gtdrivers = res)
  }
  pay(driver) {
    this._providerservice.driverPay(driver.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'حساب راننده مورد نظر تسویه شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        let index = this.drivers.indexOf(driver);
        if (index > -1) {
          this.drivers.splice(index, 1);
        }
      },
      err => {
        alert(err);
      }
    )
  }

  ngOnInit() {
    this.getDriversDebt();
    this.getDriversMostDebt();
  }

}
