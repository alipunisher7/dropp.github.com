import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { IPassenger } from '../../../../models';
@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {
  searchStr: string;
  searchRes: IPassenger[];
  PassengersInfo: IPassenger[];
  selectedPassenger: IPassenger;

  constructor(private _operatorServices: OperatorService) { }
  searchPassengers() {
    this._operatorServices.searchPassengers(this.searchStr).subscribe(res => this.PassengersInfo = res);
  }

  ngOnInit() {
  }
  OnSearch() {
    this.searchPassengers();
  }
}
