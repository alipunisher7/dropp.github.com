import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { IDriverCredit } from '../../../../models';

@Component({
  selector: 'ts-drivers-credit',
  templateUrl: './drivers-credit.component.html',
  styleUrls: ['./drivers-credit.component.scss']
})
export class DriversCreditComponent implements OnInit {
  driverCredit: IDriverCredit[] = [];

  constructor(private _operatorService: OperatorService) {
  }

  driversCredit() {
    this._operatorService.getDriversCredit().subscribe(driversCredit => {
      this.driverCredit = driversCredit;
    });
  }

  ngOnInit() {
    this.driversCredit();
  }

}
