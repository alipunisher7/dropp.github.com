import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-dashbord-panel',
  templateUrl: './dashbord-panel.component.html',
  styleUrls: ['./dashbord-panel.component.scss']
})
export class DashbordPanelComponent implements OnInit {
  cards= [
    {title1: 'سفر در حال انجام', number1: 1 ,title2: 'سفر های امروز', number2: 2, link:"/first"},
    {title1: 'راننده آنلاین', number1: 3 ,title2: 'راننده آفلاین', number2: 4, link:"/first"},
    {title1: ' کاربر جدید', number1: 3 ,title2: ' کل کاربر ها', number2: 4, link:"/first"},
    {title1: 'سازمان جدید', number1: 3 ,title2: 'سازمان ثبت شده ', number2: 4, link:"/first"}

  ]
  constructor() { }

  ngOnInit() {
  }

}
