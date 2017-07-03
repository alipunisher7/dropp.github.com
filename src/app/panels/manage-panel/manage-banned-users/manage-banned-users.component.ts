import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services';
import {IbanUsers} from '../../../models';
@Component({
  selector: 'ts-manage-banned-users',
  templateUrl: './manage-banned-users.component.html',
  styleUrls: ['./manage-banned-users.component.scss']
})
export class ManageBannedUsersComponent implements OnInit {
  drivers: IbanUsers[];
  passengers: IbanUsers[];
  constructor(private _adminService: AdminService) { }
  viewBanDrivers() {
    this._adminService.viewBanDrivers().subscribe(res => this.drivers = res);
  }
  viewBanPassengers() {
    this._adminService.viewBanPassengers().subscribe(res => this.passengers = res);
  }
  ngOnInit() {
    this.viewBanDrivers();
  }

}
