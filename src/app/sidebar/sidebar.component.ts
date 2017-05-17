import { Component, OnInit } from '@angular/core';
import { SideItem } from '../side/side-item';

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  sides: SideItem[] = [
    { title: 'داشبورد', icon: 'icon', isOpen: false, route: 'dashboard' },
    {
      title: 'آمار', icon: 'icon', isOpen: true, route: 'stat-panel',
      subItems: [
        { title: 'link1', icon: 'fa fa-arrow-left', link: 'link' },
        { title: 'link2', icon: 'fa fa-arrow-left', link: 'link' }
      ],
    },
    { title: 'مدیریت', icon: 'icon', isOpen: false, route: 'route' },
  ]

  ngOnInit() {
  }

}
