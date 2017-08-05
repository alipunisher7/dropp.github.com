import { Component, OnInit } from '@angular/core';
import {OperatorService} from 'services';
import {Trip} from 'models';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'ts-search-trips',
  templateUrl: './search-trips.component.html',
  styleUrls: ['./search-trips.component.scss']
})
export class SearchTripsComponent implements OnInit {
  search: string = '';
  trips: Trip[];
  searchControl = new FormControl();
  selectedTrip: Trip;
  resultCount = 20;
  page = 0;
  constructor(private _operatorServices: OperatorService) { }

  searchTrips() {
    this._operatorServices.searchTrips({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.trips = res);
  }
  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(400)
      .subscribe(newValue => {
        this.search = newValue
        this.searchTrips();
      });

    this.searchTrips();
  }
  onMoreClick(data) {
    this.selectedTrip = data;
  }

}
