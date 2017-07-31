import { Component, OnInit } from '@angular/core';
import { OperatorService, NotificationService } from 'services';
import { User, Notification, NotificationTypes} from 'models';

@Component({
  selector: 'ts-manage-banned-users',
  templateUrl: './manage-banned-users.component.html',
  styleUrls: ['./manage-banned-users.component.scss']
})
export class ManageBannedUsersComponent implements OnInit {
  drivers: User[];
  passengers: User[];

  constructor(private _operatorService: OperatorService, private _notification: NotificationService) { }

  getBannedDrivers() {
    this._operatorService.getBannedDrivers().subscribe(res => this.drivers = res);
  }

  getBannedPassengers() {
    this._operatorService.getBannedPassengers().subscribe(res => this.passengers = res);
  }
  unBanDriver(driver) {
    this._operatorService.unBanDriver(driver.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `راننده مورد نظر رفع بن شد `, type: NotificationTypes.success });
        this._notification.notify(notification);
        let index = this.drivers.indexOf(driver);
        if (index > -1) {
          this.drivers.splice(index, 1);
        }
      },
      error => { alert(error); }
    );
  }
  unBanPassenger(passenger) {
    this._operatorService.unBanPassenger(passenger.username).subscribe(
      res => {
        let notification = new Notification({ title: 'ثبت شد', info: `مسافر مورد نظر رفع بن شد `, type: NotificationTypes.success });
        this._notification.notify(notification);
        let index = this.passengers.indexOf(passenger);
        if (index > -1) {
          this.passengers.splice(index, 1);
        }
      },
      error => { alert(error); }
    );
  }

  ngOnInit() {
    this.getBannedDrivers();
    this.getBannedPassengers();
  }

}
