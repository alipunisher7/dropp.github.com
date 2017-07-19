import { Component, OnInit, AfterContentInit, ContentChild, Input, HostBinding } from '@angular/core';
import { InputDirective } from 'directives';

@Component({
  selector: 'ts-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {
  @ContentChild(InputDirective) input: InputDirective;
  @HostBinding('class.focused') focused: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('input: ', this.input);
  }

}
