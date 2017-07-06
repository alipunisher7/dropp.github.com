import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { IDriverCredit } from '../../../../models';

@Component({
  selector: 'ts-all-drivers-credit',
  templateUrl: './all-drivers-credit.component.html',
  styleUrls: ['./all-drivers-credit.component.scss']
})
export class AllDriversCreditComponent implements OnInit {
  result: IDriverCredit[] = [];

  constructor(private _operatorService: OperatorService) {
  }

  allDriversCredit() {
    this._operatorService.allDriversCredit().subscribe(driversCredit => {
      this.result = driversCredit;
    });
  }

  ngOnInit() {
    this.allDriversCredit();
  }

}
