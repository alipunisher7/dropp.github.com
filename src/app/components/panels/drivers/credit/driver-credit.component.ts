import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { IDriverCredit } from 'models';

@Component({
  selector: 'ts-driver-credit',
  templateUrl: './driver-credit.component.html',
  styleUrls: ['./driver-credit.component.scss']
})
export class DriverCreditComponent implements OnInit {
  searchStr: string;
  driverCredit: IDriverCredit;

  constructor(private _operatorService: OperatorService) { }

  searchDriversCredit() {
    this._operatorService.searchDriversCredit(this.searchStr).subscribe(res => this.driverCredit = res);
  }

  ngOnInit() {
  }

  onSearch() {
    this.searchDriversCredit();
  }
}
