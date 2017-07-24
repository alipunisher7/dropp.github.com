import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-support-panel',
  templateUrl: './support.panel.html',
  styleUrls: ['./support.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class SupportPanel implements OnInit {


  constructor() { }


  ngOnInit() {
  }

}
