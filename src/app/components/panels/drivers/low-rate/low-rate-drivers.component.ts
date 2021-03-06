import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { ILowRateDriver } from 'models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ts-low-rate-drivers',
  templateUrl: './low-rate-drivers.component.html',
  styleUrls: ['./low-rate-drivers.component.scss']
})
export class LowRateDriversComponent implements OnInit {
  lowRateDrivers: ILowRateDriver[];

  constructor(private _operatorServices: OperatorService, private router: Router,
    private route: ActivatedRoute) { }

  // getLowRateDriver() {
  //   this._operatorServices.getLowRateDrivers().subscribe(data => this.lowRateDrivers = data);
  // }

  ngOnInit() {
    // this.getLowRateDriver();
    this.lowRateDrivers = this.route.snapshot.data['lowRateDriver'];
  }

}
