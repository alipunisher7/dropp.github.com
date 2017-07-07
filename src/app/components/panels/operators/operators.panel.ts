import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ts-operators-panel',
  templateUrl: './operators.panel.html',
  styleUrls: ['./operators.panel.scss'],
  host: {
    class: 'panel'
  }
})
export class OperatorsPanel implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
