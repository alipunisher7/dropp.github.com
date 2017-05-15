import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar';
import {DashbordCardsComponent} from './dashbord-cards';
@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards= [
    {title1: 'سفر در حال انجام', number1: 1 ,title2: 'سفر های امروز', number2: 2, link:"/first"},
    {title1: 'راننده آنلاین', number1: 3 ,title2: 'راننده آفلاین', number2: 4, link:"/first"},
    {title1: ' کاربر جدید', number1: 3 ,title2: ' کل کاربر ها', number2: 4, link:"/first"},
    {title1: 'سازمان جدید', number1: 3 ,title2: 'سازمان ثبت شده ', number2: 4, link:"/first"}

  ]


  constructor() {

  }
}
