import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-organizations-panel',
  templateUrl: './organizations.panel.html',
  styleUrls: ['./organizations.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class OrganizationsPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
