import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from 'services';
import { IDriver } from 'models';

@Component({
  selector: 'ts-online-driver',
  templateUrl: './online-driver.component.html',
  styleUrls: ['./online-driver.component.scss']
})
export class OnlineDriverComponent implements OnInit {

  drivers: IDriver;

  constructor(private _operatorServices: OperatorService) { }

  ngOnInit() {
  }

  getOnlineDrivers() {
    this._operatorServices.getOnlineDrivers().subscribe(drivers => {
      this.drivers = drivers;
    })
  }

}
