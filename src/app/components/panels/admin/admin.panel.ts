import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-admin-panel',
  templateUrl: './admin.panel.html',
  styleUrls: ['./admin.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class AdminPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
