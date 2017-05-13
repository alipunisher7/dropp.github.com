import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar';
import {DashbordCardsComponent} from './dashbord-cards';
@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards= [
    {title1: 'first', number1: 1 ,title2: 'second', number2: 2, link:"/first"},
    {title1: 'third', number1: 3 ,title2: 'fourth', number2: 4, link:"/first"}

  ]
  title = 'ts works!';

  constructor() {

  }
}
