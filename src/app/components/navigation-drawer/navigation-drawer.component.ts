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
          { title: 'جستجوی راننده', icon: 'fa fa-taxi', route: 'search' },
          { title: 'موجودی حساب کل راننده ها', icon: 'fa fa-taxi', route: 'drivers-credit' },
          { title: 'راننده ها با امتیاز پایین', icon: 'fa fa-taxi', route: 'low-rate' }
        ],
      },
      {
        title: 'سرویس ها', icon: 'fa fa-taxi', route: 'services',
        subNavs: [
          { title: 'سرویس های فعال', icon: 'fa fa-taxi', route: 'actived-services' }
        ]
      },
      {
        title: 'مسافر ها', icon: 'fa fa-street-view', route: 'passengers',
        subNavs: [
          { title: 'جستجوی مسافر', icon: 'fa fa-user-o', route: 'search' },
          { title: 'ثبت اشتراک', icon: 'fa fa-user-o', route: 'subscribe-register' }
        ]
      },
      { title: 'سازمان ها', icon: 'fa fa-building', route: 'organizations' },
      {
        title: 'سفر ها', icon: 'fa fa-plane', route: 'trips',
        subNavs: [
          { title: 'جستجوی سفر', icon: 'fa fa-user-o', route: 'search' }
        ]
      },
      {
        title: 'اپراتورها', icon: 'fa fa-user-o', route: 'operators',
        subNavs: [
          { title: 'اضافه کردن اپراتور', icon: 'fa fa-user-o', route: 'add' },
          { title: ' اضافه کردن اپراتور ارشد', icon: 'fa fa-user-o', route: 'add-master' }
        ]
      },
      {
        title: 'مدیریت', icon: 'fa fa-wrench', route: 'admin',
        subNavs: [
          { title: 'خودروسازی', icon: 'fa fa-money', route: 'manufactures' },
          { title: 'خودرو', icon: 'fa fa-money', route: 'cars' },
          { title: 'تعرفه', icon: 'fa fa-money', route: 'tarrif' },
          { title: 'شعاع جستجو', icon: 'fa fa-money', route: 'search-radius' },
          { title: 'تیکت', icon: 'fa fa-money', route: 'tickets' },
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
    this.navItems.forEach(_ => {
      if(_.hasOwnProperty('isOpen')) { _.isOpen = false }
    });
    this.openCurrentNav();
  }

  openCurrentNav() {
    let el = this.elRef.nativeElement.querySelector('.active');
    if (el) {
      let currentRoute = el.getAttribute('href').slice(1);
      let activeNav = this.navItems.find(_ => _.route == currentRoute);
      if(activeNav) {
        activeNav.isOpen = true;
      }

    }
  }

}
