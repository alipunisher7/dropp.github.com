import { Component, OnInit, Input } from '@angular/core';
import {IDriverInfo} from '../../../../models';
@Component({
  selector: 'ts-driver-all-info',
  templateUrl: './driver-all-info.component.html',
  styleUrls: ['./driver-all-info.component.scss']
})
export class DriverAllInfoComponent implements OnInit {

  constructor() { }
  @Input() DriverInfo: IDriverInfo;
  ngOnInit() {
  }

}
