import { Component, OnInit, Input } from '@angular/core';
import { IPassenger } from 'models'

@Component({
  selector: 'ts-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  @Input() passenger: IPassenger;

  constructor() { }

  ngOnInit() {
  }

}
