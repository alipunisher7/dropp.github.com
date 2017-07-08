import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { User } from 'models';

@Component({
  selector: 'ts-manage-banned-users',
  templateUrl: './manage-banned-users.component.html',
  styleUrls: ['./manage-banned-users.component.scss']
})
export class ManageBannedUsersComponent implements OnInit {
  drivers: User[];
  passengers: User[];

  constructor(private _operatorService: OperatorService) { }

  getBannedDrivers() {
    this._operatorService.getBannedDrivers().subscribe(res => this.drivers = res);
  }

  getBannedPassengers() {
    this._operatorService.getBannedPassengers().subscribe(res => this.passengers = res);
  }

  ngOnInit() {
    this.getBannedDrivers();
    this.getBannedPassengers();
  }

}
