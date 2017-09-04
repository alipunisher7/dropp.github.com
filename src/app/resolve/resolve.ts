import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OperatorService, AdminService, CopService, ProviderService } from '../services';

@Injectable()
export class getOnlineDriverResolver implements Resolve<any> {

  constructor(private _operatorservice: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let onlineDrivers = this._operatorservice.getOnlineDrivers();
    return onlineDrivers;
  }
}

@Injectable()
export class getSettingResolver implements Resolve<any> {
  constructor(private _adminService: AdminService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let settings = this._adminService.getSystemSetting();
    return settings;
  }
}
@Injectable()
export class getLowRateDriverResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let lowRateDrivers = this._operatorService.getLowRateDrivers();
    return lowRateDrivers;
  }
}
@Injectable()
export class getOnlineTripsResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let onlineTrips = this._operatorService.getOnlineTrips();
    return onlineTrips;
  }
}
@Injectable()
export class getManufacturesResolver implements Resolve<any> {
  constructor(private _copservice: CopService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let Manufactures = this._copservice.getManufacture();
    console.log(Manufactures);
    return Manufactures;
  }
}
@Injectable()
export class getSearchRadiusResolver implements Resolve<any> {
  constructor(private _adminService: AdminService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let Radiuses = this._adminService.getRadiuses();
    console.log(Radiuses);
    return Radiuses;
  }
}
@Injectable()
export class getVouchersResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let Vouchers = this._operatorService.getVouchers();
    return Vouchers;
  }
}
@Injectable()
export class getDriversCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let driversCount = this._operatorService.getDriversCount();
    return driversCount;
  }
}
@Injectable()
export class getOnlineTripsCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let onlineTripsCount = this._operatorService.getOnlineTripsCount();
    return onlineTripsCount;
  }
}
@Injectable()
export class getTodayTripsCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let todayTripsCount = this._operatorService.getTodayTripsCount();
    return todayTripsCount;
  }
}
@Injectable()
export class getNewPassengersCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let newPassengersCount = this._operatorService.getNewPassengersCount();
    return newPassengersCount;
  }
}
@Injectable()
export class getPassengersCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let passengersCount = this._operatorService.getPassengersCount();
    return passengersCount;
  }
}
@Injectable()
export class getOrganizationsCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let organizationCount = this._operatorService.getOrganizationsCount();
    return organizationCount;
  }
}
@Injectable()
export class getNewOrganizationsCountResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let newOrganizationCount = this._operatorService.getNewOrganizationsCount();
    return newOrganizationCount;
  }
}
@Injectable()
export class getBannedDriversResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let bannedDrivers = this._operatorService.getBannedDrivers();
    return bannedDrivers;
  }
}
@Injectable()
export class getBannedPassengersResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let bannedPassengers = this._operatorService.getBannedPassengers();
    return bannedPassengers;
  }
}
@Injectable()
export class getBugsResolver implements Resolve<any> {
  constructor(private _adminService: AdminService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let bugs = this._adminService.getBugs();
    return bugs;
  }
}
@Injectable()
export class getUnresolvedTicketsResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let tickets = this._operatorService.getTickets();
    return tickets;
  }
}
@Injectable()
export class getDriversMostDebtsResolver implements Resolve<any> {
  constructor(private _providerservice: ProviderService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let mddrivers = this._providerservice.getDriversMostDebt();
    return mddrivers;
  }
}
@Injectable()
export class getproviderclaimResolver implements Resolve<any> {
  constructor(private _providerservice: ProviderService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let debt = this._providerservice.getproviderclaim();
    return debt;
  }
}
@Injectable()
export class getProvidersResolver implements Resolve<any> {
  constructor(private _operatorService: OperatorService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let serviceProviders = this._operatorService.getProviders();
    return serviceProviders;
  }
}
