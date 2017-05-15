import { Component } from '@angular/core';
import {SidebarComponent} from './sidebar';
import {DashbordCardsComponent} from './dashbord-cards';
import {SideComponent} from './side';
import {DashbordPanelComponent} from './dashbord-panel';
import {OperatorService} from './Services/operator.service';
@Component({
  selector: 'ts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[OperatorService]
})
export class AppComponent {



  constructor() {

  }
}
