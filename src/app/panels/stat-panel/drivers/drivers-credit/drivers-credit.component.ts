import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { IDriverCreditInfo } from '../../../../models';

@Component({
  selector: 'ts-drivers-credit',
  templateUrl: './drivers-credit.component.html',
  styleUrls: ['./drivers-credit.component.scss']
})
export class DriversCreditComponent implements OnInit {
  searchStr: string;
  searchRes: IDriverCreditInfo;

  constructor(private _operatorService: OperatorService) { }

  searchDriversCredit() {
    this._operatorService.searchDriversCredit(this.searchStr).subscribe(res => this.searchRes = res);
  }

  ngOnInit() {
  }

  onSearch() {
    this.searchDriversCredit();
  }
}
