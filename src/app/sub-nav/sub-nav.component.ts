import { Component, OnInit, Input } from '@angular/core';
import {SideItem} from '../side/side-item';

@Component({
  selector: 'ts-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() items = [];
  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
