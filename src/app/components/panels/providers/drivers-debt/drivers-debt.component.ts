import { Component, OnInit } from '@angular/core';
import { ProviderService, NotificationService } from 'services';
import { IDriverDebt, Notification, NotificationTypes, Error } from 'models';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'ts-drivers-debt',
  templateUrl: './drivers-debt.component.html',
  styleUrls: ['./drivers-debt.component.scss']
})
export class DriversDebtComponent implements OnInit {

  constructor(private _providerservice: ProviderService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) { }
  drivers: IDriverDebt[];
  mddrivers: IDriverDebt[];
  gtdrivers: IDriverDebt[];
  value: string = '';
  banValue: string = '';
  // getDriversMostDebt() {
  //   this._providerservice.getDriversMostDebt().subscribe(res => this.mddrivers = res)
  // }
  onSubmit() {
    let val = -this.value;
    this._providerservice.getdriverDebtgt(val).subscribe(res => this.gtdrivers = res)
  }
  pay(driver) {
    this._providerservice.driverPay(driver.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'حساب راننده مورد نظر تسویه شد', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
        let index = this.mddrivers.indexOf(driver);
        if (index > -1) {
          this.mddrivers.splice(index, 1);
        }
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }
  onBan() {
    let val = -this.banValue;
    this._providerservice.banDriversGtThan(val).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: 'راننده های مورد نظر بن شدند', type: NotificationTypes.success });
        this._notificationservice.notify(notification);
      },
      error => {
        let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
        this._notificationservice.notify(notification);
      }
    )
  }


  ngOnInit() {
    // this.getDriversMostDebt();
    this.mddrivers = this.route.snapshot.data['mddrivers'];
  }

}
