import { Component, OnInit } from '@angular/core';
import { IDriverInfo } from '../../models';

@Component({
  selector: 'ts-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.scss']
})
export class StatPanelComponent implements OnInit {
  driverInfoes = [
    { name: 'ali', email: 'alizandy@gmail.co', phone: '0911111111', carInfo: '88888888888' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
