import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from '../services/operator.service';
import {IDriverInfo} from './info';

@Component({
  selector: 'ts-online-driver',
  templateUrl: './online-driver.component.html',
  styleUrls: ['./online-driver.component.scss']
})
export class OnlineDriverComponent implements OnInit {
  @Input() driverInfoInputs: IDriverInfo;

  constructor(private _operatorServices: OperatorService) { }
  getOnlineDriverInfo() {
    this._operatorServices.getOnlineDriverInfo().subscribe(data => {

    })
  }
  ngOnInit() {
  }

}
