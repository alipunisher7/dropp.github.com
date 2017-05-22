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
        title: 'آمار', icon: 'fa fa-id-card', isOpen: true, route: 'stats',
        subNavs: [
          { title: 'سرویس ها', icon: 'fa fa-taxi', route: 'services' },
          { title: 'مسافر ها', icon: 'fa fa-street-view', route: 'passengers' },
          { title: 'سازمان ها', icon: 'fa fa-building', route: 'organs' },
          { title: 'سفر ها', icon: 'fa fa-plane', route: 'trips' }
        ],
      },
      { title: 'مدیریت', icon: 'fa fa-wrench', isOpen: false, route: 'route' },
    ];
  }
  ngOnInit() {
  }

}
