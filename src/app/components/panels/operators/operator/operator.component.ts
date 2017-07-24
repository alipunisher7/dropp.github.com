import { Component, OnInit, Input} from '@angular/core';
import {IOperator} from 'models';

@Component({
  selector: 'ts-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  constructor() { }
  @Input() operator: IOperator;
  ngOnInit() {
  }

}
