import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'services';
import { IPassenger } from 'models';

@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {

  searchStr: string;
  passengers: IPassenger[];
  selectedPassenger: IPassenger;

  constructor(private _operatorServices: OperatorService) { }

  searchPassengers() {
    this._operatorServices.searchPassengers(this.searchStr).subscribe(res => this.passengers = res);
  }

  ngOnInit() {
  }

  OnSearch() {
    this.searchPassengers();
  }
}
