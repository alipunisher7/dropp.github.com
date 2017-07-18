import { Component, OnInit, Input } from '@angular/core';
import {IOperator} from 'models';
@Component({
  selector: 'ts-operator-for-admin',
  templateUrl: './operator-for-admin.component.html',
  styleUrls: ['./operator-for-admin.component.scss']
})
export class OperatorForAdminComponent implements OnInit {

  constructor() { }
  @Input() operator: IOperator;
  ngOnInit() {
  }

}
