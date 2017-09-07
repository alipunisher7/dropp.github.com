import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicle } from 'models';
import { CopService } from 'services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ts-vehicle-distance',
  templateUrl: './vehicle-distance.component.html',
  styleUrls: ['./vehicle-distance.component.scss'], 
  providers:[DatePipe]
})
export class VehicleDistanceComponent implements OnInit {
  today = new Date();
  vehicles: Vehicle[];
  search: string = '';
  searchControl = new FormControl();
  resultCount = 20;
  page = 0;

  constructor(private _copservice: CopService ,private datePipe: DatePipe) { }

  // searchVehicle() {
  //   // TODO: count and prefix
  //   this._copservice.searchVehicle({ query: this.search, count: this.resultCount, offset: this.page }).subscribe(res => this.vehicles = res);
  // }


  ngOnInit() {
    // this.searchControl.valueChanges
    //   .debounceTime(400)
    //   .subscribe(newValue => {
    //     this.search = newValue
    //     this.searchVehicle();
    //   });
    //
    // this.searchVehicle();
    let endDate =this.datePipe.transform(new Date() , 'yyyy-MM-dd');
    console.log(endDate);
  }

}
