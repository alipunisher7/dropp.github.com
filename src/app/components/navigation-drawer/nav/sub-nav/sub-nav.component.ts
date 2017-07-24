import { Component, OnInit, Input } from '@angular/core';
import { INav } from 'models';

@Component({
  selector: 'ts-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {

  @Input() thisRoute: string;
  @Input() subNavs: INav[] = [];

  constructor() { }

  ngOnInit() {
  }

}
