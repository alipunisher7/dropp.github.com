import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../services';
import {ISearchDriverInfo} from '../../../models';

@Component({
  selector: 'ts-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.scss']
})
export class SearchDriversComponent implements OnInit {
  searchStr: string;
  searchRes: ISearchDriverInfo[];
  constructor(private _operatorServices: OperatorService) { }
  searchDrivers() {
    this._operatorServices.searchDrivers(this.searchStr).subscribe(res => { });
  }
  ngOnInit() {
  }

}
