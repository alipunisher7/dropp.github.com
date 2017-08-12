import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {OperatorService} from 'services';


@Injectable()
export class getOnlineDriverResolver implements Resolve<any> {

  constructor(private _operatorservice: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let onlineDrivers = this._operatorservice.getBannedDrivers();
    console.log(onlineDrivers);
    return onlineDrivers;
  }
}
