import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../../../../services';
import {ISearchPassengersInfo} from '../../../../models';
@Component({
  selector: 'ts-search-passengers',
  templateUrl: './search-passengers.component.html',
  styleUrls: ['./search-passengers.component.scss']
})
export class SearchPassengersComponent implements OnInit {

  constructor(private _operatorServices: OperatorService) { }
  searchStr: string;
  searchRes: ISearchPassengersInfo[];
  searchPassengers() {
    this._operatorServices.searchPassengers(this.searchStr).subscribe(res => { });
  }
  ngOnInit() {
  }

}
