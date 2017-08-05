import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from 'services';
import { Driver } from 'models';

@Component({
  selector: 'ts-online-driver',
  templateUrl: './online-driver.component.html',
  styleUrls: ['./online-driver.component.scss']
})
export class OnlineDriverComponent implements OnInit {

  drivers: Driver[];

  constructor(private _operatorServices: OperatorService) { }


  getOnlineDrivers() {
    this._operatorServices.getOnlineDrivers().subscribe(drivers => {
      this.drivers = drivers;
    })
  }

  ngOnInit() {
    this.getOnlineDrivers()
  }
}
