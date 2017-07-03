import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../../../../services';
import {IDriversCreditInfo} from '../../../../models';
@Component({
  selector: 'ts-all-drivers-credit',
  templateUrl: './all-drivers-credit.component.html',
  styleUrls: ['./all-drivers-credit.component.scss']
})
export class AllDriversCreditComponent implements OnInit {
  Result: IDriversCreditInfo[];
  constructor(private _operatorService: OperatorService) { }
  allDriversCredit() {
    this._operatorService.allDriversCredit().subscribe(DriversCredit => {
      this.Result = DriversCredit;
    });
  }
  ngOnInit() {
    this.allDriversCredit();
  }

}
