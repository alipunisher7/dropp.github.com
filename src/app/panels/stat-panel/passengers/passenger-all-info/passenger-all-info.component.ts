import { Component, OnInit, Input } from '@angular/core';
import {IPassengersInfo} from '../../../../models'

@Component({
  selector: 'ts-passenger-all-info',
  templateUrl: './passenger-all-info.component.html',
  styleUrls: ['./passenger-all-info.component.scss']
})
export class PassengerAllInfoComponent implements OnInit {

  constructor() { }
  @Input() PassengerInfo: IPassengersInfo;
  ngOnInit() {
  }

}
