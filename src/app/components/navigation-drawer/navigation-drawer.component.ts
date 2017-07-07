import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { INavItem } from 'models';

@Component({
  selector: 'ts-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit, AfterViewInit {

  navItems: INavItem[];

  constructor(private elRef: ElementRef) {
    this.navItems = [
      { title: 'داشبورد', icon: 'fa fa-yelp', isOpen: true, route: 'dashboard' },
      {
        title: 'راننده ها', icon: 'fa fa-drivers-license', route: 'drivers',
        subNavs: [
          { title: 'جستوجوی راننده', icon: 'fa fa-taxi', route: 'search' },

        ],
      },
      { title: 'سرویس ها', icon: 'fa fa-taxi', route: 'services' },
      { title: 'مسافر ها', icon: 'fa fa-street-view', route: 'passengers' },
      { title: 'سازمان ها', icon: 'fa fa-building', route: 'organizations' },
      { title: 'سفر ها', icon: 'fa fa-plane', route: 'trips' },
      { title: 'اپراتورها', icon: 'fa fa-user-o', route: 'operators' },
      {
        title: 'مدیریت', icon: 'fa fa-wrench', route: 'admin',
        subNavs: [
          { title: 'کد تخفیف', icon: 'fa fa-money', route: 'manage-vouchers' },
          { title: ' کاربران منع شده', icon: 'fa fa-ban', route: 'manage-banned-users' },
        ],
      },
    ];
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.openCurrentNav();
    }, 0);
  }

  ngOnInit() {
  }

  onNavClick(navItem: INavItem) {
    this.navItems.forEach(_ => _.isOpen = false);
    this.openCurrentNav();
  }

  openCurrentNav() {
    let currentRoute = this.elRef.nativeElement.querySelector('.active').getAttribute('href').slice(1);
    this.navItems.find(_ => _.route == currentRoute).isOpen = true;
  }

}
