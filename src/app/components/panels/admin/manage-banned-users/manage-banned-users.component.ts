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

  viewBanDrivers() {
    this._operatorService.viewBanDrivers().subscribe(res => this.drivers = res);
  }

  viewBanPassengers() {
    this._operatorService.viewBanPassengers().subscribe(res => this.passengers = res);
  }

  ngOnInit() {
    this.viewBanDrivers();
  }

}
