import { Component, OnInit , Input } from '@angular/core';
import { SideItem } from './side-item';

@Component({
  selector: 'ts-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
@Input () sideInput: SideItem;
  constructor() { }

  ngOnInit() {

  }

}
