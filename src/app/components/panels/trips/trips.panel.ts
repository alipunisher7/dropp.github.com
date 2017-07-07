import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-trips-panel',
  templateUrl: './trips.panel.html',
  styleUrls: ['./trips.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class TripsPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
