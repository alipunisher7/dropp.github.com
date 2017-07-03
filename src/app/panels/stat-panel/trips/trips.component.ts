import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../../services';
import { ITripInfo } from '../../../models';

@Component({
  selector: 'ts-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  searchStr: string;
  searchRes: ITripInfo[];

  constructor(private _operatorServices: OperatorService) { }

  searchTrips() {
    this._operatorServices.searchTrips(this.searchStr).subscribe(res => { })
  }

  ngOnInit() {
  }

}
