import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { INavItem } from 'models';

@Component({
  selector: 'ts-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit, AfterViewInit {

  navItems: INavItem[];

  constructor(private elRef: ElementRef, private router: Router) {
    this.router.events.subscribe((e: RoutesRecognized) => {
      setTimeout(
        this.openCurrentNav(e.urlAfterRedirects),
        0
      );
    });
    this.navItems = [
      { title: 'داشبورد', icon: 'fa fa-yelp', isOpen: true, route: 'dashboard' },
      {
        title: 'راننده ها', icon: 'fa fa-drivers-license', route: 'drivers',
        subNavs: [
          { title: 'راننده های آنلاین', icon: 'fa fa-user-o', route: 'online' },
          { title: 'جستجوی راننده', icon: 'fa fa-search', route: 'search' },
          { title: 'موجودی حساب راننده ها', icon: 'fa fa-usd', route: 'drivers-credit' },
          { title: 'راننده ها با امتیاز پایین', icon: 'fa fa-minus-square', route: 'low-rate' },
          { title: 'تایید راننده ها', icon: 'fa fa-check', route: 'confirm-driver' },
          { title: 'مسافت خودرو ها', icon: 'fa fa-check', route: 'vehicle-distance' },
          { title: 'درخواست های پرداخت', icon: 'fa fa-check', route: 'payment-req' },
        ],
      },
      {
        title: 'سرویس ها', icon: 'fa fa-taxi', route: 'services',
        subNavs: [
          { title: 'سرویس های فعال', icon: 'fa fa-toggle-on', route: 'actived-services' }
        ]
      },
      {
        title: 'مسافر ها', icon: 'fa fa-street-view', route: 'passengers',
        subNavs: [
          { title: 'جستجوی مسافر', icon: 'fa fa-search', route: 'search' },
          { title: 'ثبت اشتراک', icon: 'fa fa-pencil-square-o', route: 'subscribe-register' },
          { title: 'جستجو اشتراک ها', icon: 'fa fa-search-plus', route: 'search-subscribe' },
        ]
      },
      {
        title: 'سازمان ها', icon: 'fa fa-building', route: 'organizations',
        subNavs: [
          { title: 'جستجوی سازمان ', icon: 'fa fa-search', route: 'search' },
        ]
      },
      {
        title: 'سفر ها', icon: 'fa fa-plane', route: 'trips',
        subNavs: [
          { title: 'جستجوی سفر', icon: 'fa fa-search', route: 'search' },
          { title: 'سفر های آنلاین', icon: 'fa fa-plane', route: 'online' }
        ]
      },
      {
        title: 'اپراتورها', icon: 'fa fa-user-o', route: 'operators',
        subNavs: [
          { title: 'اضافه کردن اپراتور', icon: 'fa fa-user-plus', route: 'add' },
          { title: ' اضافه کردن اپراتور ارشد', icon: 'fa fa-user-plus', route: 'add-master' },
          { title: 'جستجو اپراتور', icon: 'fa fa-search', route: 'search' }
        ]
      },
      {
        title: 'مدیریت', icon: 'fa fa-wrench', route: 'admin',
        subNavs: [
          { title: 'خودروسازی', icon: 'fa fa-bolt', route: 'manufactures' },
          { title: 'خودرو', icon: 'fa fa-car', route: 'cars' },
          { title: 'تعرفه', icon: 'fa fa-money', route: 'tarrif' },
          { title: 'شعاع جستجو', icon: 'fa fa-circle-o-notch', route: 'search-radius' },
          { title: 'موضوع تیکت', icon: 'fa fa-envelope', route: 'tickets' },
          { title: 'کد تخفیف', icon: 'fa fa-percent', route: 'manage-vouchers' },
          { title: 'بارگذاری مجدد سرویس', icon: 'fa fa-refresh', route: 'reload' },
          { title: ' کاربران منع شده', icon: 'fa fa-ban', route: 'manage-banned-users' },
          { title: 'خطاها', icon: 'fa fa-times-circle', route: 'bugs' },
          { title: 'تنظیمات سیستم', icon: 'fa fa-cog', route: 'system-setting' },
          { title: 'استان و شهر', icon: 'fa fa-square-o', route: 'state-city' },
          { title: 'تغییر رمز عبور اپراتور', icon: 'fa fa-key', route: 'change-pass' },
        ],
      },
      {
        title: 'پشتیبانی', icon: 'fa fa-user-circle-o', route: 'support',
        subNavs: [
          { title: 'نمایش همه تیکت ها', icon: 'fa fa-envelope-o', route: 'view-ticket' },
          { title: 'جستجو تیکت ها', icon: 'fa fa-envelope-o', route: 'search-tickets' },
        ]
      },
      {
        title: 'ارائه دهنده ها', icon: 'fa fa-handshake-o', route: 'provider',
        subNavs: [
          { title: 'جستجو راننده ها', icon: 'fa fa-search', route: 'search' },
          { title: 'نمایش ارائه دهنده ها', icon: 'fa fa-tablet', route: 'show-providers' },
          { title: 'بدهی راننده ها', icon: 'fa fa-money', route: 'debt' },
          { title: 'صورت حساب ارائه دهنده', icon: 'fa fa-money', route: 'provider-debt' },
          { title: 'اضافه کردن ارائه دهنده', icon: 'fa fa-money', route: 'add-provider' },
        ]
      },
      {
        title: 'گزارش ها', icon: 'fa fa-bar-chart', route: 'report',
        subNavs: [
          { title: 'دریافت گزارش ها', icon: 'fa fa-download', route: 'get-report' }
        ]
      }
    ];
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  openCurrentNav(currentRoute: string) {
    if (currentRoute) {
      currentRoute = currentRoute.split('/')[2];
      let activeNav = this.navItems.find(_ => _.route == currentRoute);
      if (activeNav) {
        this.navItems.forEach(_ => {
          if (_.hasOwnProperty('isOpen')) { _.isOpen = false }
        });
        activeNav.isOpen = true;
      }
    }
  }

}
