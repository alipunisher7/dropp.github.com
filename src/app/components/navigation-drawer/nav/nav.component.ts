import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INavItem } from 'models';

@Component({
  selector: 'ts-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navItem: INavItem;
  @Input() seperator: Boolean;
  @Output() onClick = new EventEmitter<INavItem>()

  constructor() {
  }

  ngOnInit() {
  }

  onNavClick() {
    this.onClick.emit(this.navItem);
  }

}
