import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-drivers-panel',
  templateUrl: './drivers.panel.html',
  styleUrls: ['./drivers.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class DriversPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
