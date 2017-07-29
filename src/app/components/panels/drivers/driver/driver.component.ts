import { Component, OnInit, Input } from '@angular/core';
import { Driver } from 'models';
@Component({
  selector: 'ts-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  @Input() driver: Driver;

  constructor() { }

  ngOnInit() {
  }

}
