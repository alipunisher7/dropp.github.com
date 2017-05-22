import { Component, OnInit } from '@angular/core';
import { INavItem } from '../models';

@Component({
  selector: 'ts-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit {

  navItems: INavItem[];

  constructor() {
    this.navItems = [
      { title: 'داشبورد', icon: 'fa fa-yelp', isOpen: false, route: 'dashboard' },
      {
        title: 'آمار', icon: 'fa fa-id-card', isOpen: true, route: 'stat-panel',
        subNavs: [
          { title: 'link1', icon: 'fa fa-arrow-left', route: 'link' },
          { title: 'link2', icon: 'fa fa-arrow-left', route: 'link' }
        ],
      },
      { title: 'مدیریت', icon: 'fa fa-wrench', isOpen: false, route: 'route' },
    ];
  }
  ngOnInit() {
  }

}
