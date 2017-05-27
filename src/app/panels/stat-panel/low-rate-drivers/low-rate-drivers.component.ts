import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../../../services';

@Component({
  selector: 'ts-low-rate-drivers',
  templateUrl: './low-rate-drivers.component.html',
  styleUrls: ['./low-rate-drivers.component.scss']
})
export class LowRateDriversComponent implements OnInit {
  constructor(private _operatorServices: OperatorService) { }
  viewLowRateDriver() {
    this._operatorServices.viewLowRateDriver().subscribe(data => {

    });
  }
  ngOnInit() {
  }

}
