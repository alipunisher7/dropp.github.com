import { Component, OnInit, Input } from '@angular/core';
import { ISubNavItem } from '../../../models';

@Component({
  selector: 'ts-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
  @Input() subNavs: ISubNavItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
