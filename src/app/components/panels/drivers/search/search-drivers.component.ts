import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../../services';
import { IDriver } from '../../../../models';

@Component({
  selector: 'ts-search-drivers',
  templateUrl: './search-drivers.component.html',
  styleUrls: ['./search-drivers.component.scss']
})
export class SearchDriversComponent implements OnInit {
  searchStr: string;
  drivers: IDriver[];
  selectedDriver: IDriver;

  constructor(private _operatorServices: OperatorService) { }

  searchDrivers() {
    this._operatorServices.searchDrivers(this.searchStr).subscribe(res => this.drivers = res);
  }

  ngOnInit() {
  }

  OnSearch() {
    this.searchDrivers();
  }

  onMoreClick(data) {
    this.selectedDriver = data;
  }

}
