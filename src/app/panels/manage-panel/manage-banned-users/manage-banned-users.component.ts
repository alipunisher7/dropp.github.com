import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services';
import {IBanUsers} from '../../../models';
@Component({
  selector: 'ts-manage-banned-users',
  templateUrl: './manage-banned-users.component.html',
  styleUrls: ['./manage-banned-users.component.scss']
})
export class ManageBannedUsersComponent implements OnInit {
  drivers: IBanUsers[];
  passengers: IBanUsers[];
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
