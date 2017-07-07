import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { ILowRateDriver } from '../../../../models';

@Component({
  selector: 'ts-low-rate-drivers',
  templateUrl: './low-rate-drivers.component.html',
  styleUrls: ['./low-rate-drivers.component.scss']
})
export class LowRateDriversComponent implements OnInit {
  lowRateDrivers: ILowRateDriver[];

  constructor(private _operatorServices: OperatorService) { }

  getLowRateDriver() {
    this._operatorServices.getLowRateDriver().subscribe(data => this.lowRateDrivers = data);
  }

  ngOnInit() {
    this.getLowRateDriver();
  }

}
