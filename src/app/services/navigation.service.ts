import { Injectable } from '@angular/core';
import { INav } from 'models';

@Injectable()
export class NavigationService {

  nav: INav
  route: INav;
  subRoutes: Array<string>;


  get currentRoute() {
    return [this.route, this.subRoutes ];
  }

  constructor() { }

}
