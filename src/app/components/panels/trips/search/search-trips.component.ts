import { Component, OnInit } from '@angular/core';
import {OperatorService} from 'services';
import {ITrip} from 'models';

@Component({
  selector: 'ts-search-trips',
  templateUrl: './search-trips.component.html',
  styleUrls: ['./search-trips.component.scss']
})
export class SearchTripsComponent implements OnInit {
  searchStr: string;
  trips: ITrip[];
  selectedTrip: ITrip;
  constructor(private _operatorServices: OperatorService) { }

  searchTrips() {
    // this._operatorServices.searchPassengers(this.searchStr).subscribe(res => this.trips = res);
  }
  ngOnInit() {
  }
  onSearch() {
    // this.searchTrips();
  }
  onMoreClick(data) {
    this.selectedTrip = data;
  }

}
