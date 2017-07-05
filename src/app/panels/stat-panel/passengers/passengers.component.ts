import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  host: {
    class: 'panel'
  }
})
export class PassengersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
