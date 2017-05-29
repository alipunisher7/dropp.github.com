import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../../../services';
import {ITripsInfo} from '../../../models';

@Component({
  selector: 'ts-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor(private _operatorServices: OperatorService) { }
  searchStr: string;
  searchRes: ITripsInfo[];
  searchTrips() {
    this._operatorServices.searchTrips(this.searchStr).subscribe(res => { })
  }
  ngOnInit() {
  }

}
