import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-service-panel',
  templateUrl: './service.panel.html',
  styleUrls: ['./service.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class ServicePanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
