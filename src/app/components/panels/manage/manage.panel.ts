import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-manage-panel',
  templateUrl: './manage.panel.html',
  styleUrls: ['./manage.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class ManagePanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
