import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { User, Notification, NotificationTypes, Error } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-manage-banned-users',
  templateUrl: './manage-banned-users.component.html',
  styleUrls: ['./manage-banned-users.component.scss']
})
export class ManageBannedUsersComponent implements OnInit {
  drivers: User[];
  passengers: User[];

  constructor(private _operatorService: OperatorService, private _notificationservice: NotificationService, private router: Router,
    private route: ActivatedRoute) { }

  // getBannedDrivers() {
  //   this._operatorService.getBannedDrivers().subscribe(res => this.drivers = res);
  // }

  // getBannedPassengers() {
  //   this._operatorService.getBannedPassengers().subscribe(res => this.passengers = res);
  // }
  unBanDriver(driver) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._operatorService.unBanDriver(driver.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `راننده مورد نظر رفع بن شد `, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          let index = this.drivers.indexOf(driver);
          if (index > -1) {
            this.drivers.splice(index, 1);
          }
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد');
    }
  }
  unBanPassenger(passenger) {
    if (confirm('آیا مطمئن هستید؟')) {

      this._operatorService.unBanPassenger(passenger.username).subscribe(
        res => {
          let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر رفع بن شد `, type: NotificationTypes.success });
          this._notificationservice.notify(notification);
          let index = this.passengers.indexOf(passenger);
          if (index > -1) {
            this.passengers.splice(index, 1);
          }
        },
        error => {
          let notification = new Notification({ title: 'خطا', info: Error.getName(error.code), type: NotificationTypes.error });
          this._notificationservice.notify(notification);
        }
      );
    }
    else {
      alert('کنسل شد');
    }
  }

  ngOnInit() {
    // this.getBannedDrivers();
    this.drivers = this.route.snapshot.data['bannedDrivers'];
    // this.getBannedPassengers();
    this.passengers = this.route.snapshot.data['bannedPassengers'];
  }

}
