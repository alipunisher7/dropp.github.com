import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-passenger-panel',
  templateUrl: './passengers.panel.html',
  styleUrls: ['./passengers.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class PassengersPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
