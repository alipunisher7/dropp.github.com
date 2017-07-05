import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../../../../services';
import {IPassengersInfo} from '../../../../models';
@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {

  constructor(private _operatorServices: OperatorService) { }
  searchStr: string;
  PassengersInfo: IPassengersInfo[];
  selectedPassenger: IPassengersInfo;
  searchPassengers() {
    this._operatorServices.searchPassengers(this.searchStr).subscribe(res => this.PassengersInfo = res);
  }
  ngOnInit() {
  }
  OnSearch() {
    this.searchPassengers();
  }
}
