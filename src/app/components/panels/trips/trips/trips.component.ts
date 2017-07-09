import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from 'services';
import { ITrip } from 'models';

@Component({
  selector: 'ts-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  @Input() trip: ITrip;

  constructor(private _operatorServices: OperatorService) { }


  ngOnInit() {
  }

}
