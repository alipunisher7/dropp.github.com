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
      { title: 'داشبورد', icon: 'fa fa-yelp', isOpen: true, route: 'dashboard' },
      {
        title: 'آمار', icon: 'fa fa-id-card', isOpen: false, route: 'stats',
        subNavs: [
          { title: 'سرویس ها', icon: 'fa fa-taxi', route: 'services' },
          { title: 'مسافر ها', icon: 'fa fa-street-view', route: 'passengers' },
          { title: 'راننده ها', icon: 'fa fa-circle-o', route: 'drivers' },
          { title: 'سازمان ها', icon: 'fa fa-building', route: 'organizations' },
          { title: 'سفر ها', icon: 'fa fa-plane', route: 'trips' }
        ],
      },
      {
        title: 'مدیریت', icon: 'fa fa-wrench', isOpen: false, route: 'manage-panel',
        subNavs: [
          { title: 'سرویس ها', icon: 'fa fa-tachometer', route: 'manage-services' },
          { title: 'راننده ها', icon: 'fa fa-users', route: 'manage-drivers' },
          { title: ' اپراتورها', icon: 'fa fa-user-o', route: 'manage-operators' },
          { title: 'کد تخفیف', icon: 'fa fa-money', route: 'manage-vouchers' },
          { title: ' کاربران منع شده', icon: 'fa fa-ban', route: 'manage-banned-users' },
        ],

      },
    ];
  }

  ngOnInit() {
  }

  onNavClick(navItem: INavItem) {
    this.navItems.forEach(_ => _.isOpen = false);
    navItem.isOpen = true;2
  }

}
