import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  sides = [
    { title: 'داشبورد', icon: 'icon', isOpen: false, route: 'dashboard' },
    { title: 'آمار', icon: 'icon', isOpen: false, route: 'stat-panel' },
    { title: 'مدیریت', icon: 'icon', isOpen: false },
  ]

  ngOnInit() {
  }

}
