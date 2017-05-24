import { Component, OnInit, Input } from '@angular/core';
import { INavItem } from '../../models';

@Component({
  selector: 'ts-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navItem: INavItem;
  @Input() seperator: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
