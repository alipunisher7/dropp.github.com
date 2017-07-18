import { Injectable } from '@angular/core';
import { URLSearchParams, Response } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType, ApiError, ISearchParam, Driver, Organization } from 'models'
import { OperatorApi } from './providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';

@Injectable()
export class OperatorService {

  constructor(private _http: AuthHttpService, private _operatorApi: OperatorApi) { }

  insertSubscribe(subscribe) {
    let url = this._operatorApi.insertSubscribeUrl;

    return this._http.post(url, subscribe)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  // -- Drivers -- //
  confirmDriver(driver) {
    let url = this._operatorApi.confirmDriverUrl(driver);

    return this._http.post(url, driver)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  getDriver(username): Observable<any> {
    let url = this._operatorApi.getDriverUrl(username);
    return this._http.get(url).map((res: Response) => res.json);
  }

  searchDrivers(param: ISearchParam) {
    let url = this._operatorApi.searchDriversUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);
    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let drivers = json.data.Drivers.map((driver) => new Driver(driver));
        return drivers;
      })
      .catch(this.handleError);
  }

  getDriversCount() {
    let url = this._operatorApi.getDriversCount;

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  banDriver(username: string) {
    let url = this._operatorApi.banDriverUrl;
    let body = { username };

    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getBannedDrivers() {
    let url = this._operatorApi.getBannedDriversUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['banDrivers'];
        return data;
      })
      .catch(this.handleError);
  }
  unBanDriver(username) {
    let url = this._operatorApi.unBanDriverUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getOnlineDrivers(): Observable<any> {
    let url = this._operatorApi.getOnlineDriversUrl;

    return this._http
      .get(url)
      .map((res: Response) => res.json().data);
  }

  getOnlineDriversCount() {
    let url = this._operatorApi.getOnlineDriversCountUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  getDriversCredit() {
    let url = this._operatorApi.getDriversCreditUrl;
    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['driversCredit'];
        return data;

      })
      .catch(this.handleError);
  }

  getDriverCredit(username: string) {
    let url = this._operatorApi.getDriverCreditUrl(username);

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.drivers;
        return data;
      })
      .catch(this.handleError);
  }

  getLowRateDrivers(): Observable<any> {
    let url = this._operatorApi.getLowRateDriversUrl;
    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data.users.Drivers;
        return data;
      })
      .catch(this.handleError);
  }
  // -- Drivers -- //


  // -- Passenger -- //
  searchPassengers(param: ISearchParam) {
    let url = this._operatorApi.searchPassengersUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.Passengers;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  banPassenger(username: string) {
    let url = this._operatorApi.banPassengerUrl;
    let body = { username }

    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getBannedPassengers() {
    let url = this._operatorApi.getBannedPassengersUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['banPassengers'];
        return data;
      })
      .catch(this.handleError);
  }
  unBanPassenger(username) {
    let url = this._operatorApi.unBanDriverUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  // -- Passenger -- //

  // -- Organization -- //
  insertOrganization(): Observable<any> {
    let url = this._operatorApi.insertOrganizationUrl;

    return this._http
      .get(url)
      .map((res: Response) => res.json);
  }

  getOrganization(username: string): Observable<any> {
    let url = this._operatorApi.getOrganizationUrl(username);
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  confirmOrganization(username: string): Observable<any> {
    let url = this._operatorApi.getOrganizationUrl(username);
    return this._http.post(url, undefined)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  searchOrganizations(param: ISearchParam) {
    let url = this._operatorApi.getOrganizationsUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let organizations = json.data.organizations.map(organization => new Organization(organization));
        console.log(organizations);
        return organizations;
      })
      .catch(this.handleError);
  }

  removeOrganizations(username: string): Observable<any> {
    let url = this._operatorApi.removeOrganizationsUrl(username);

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }
  // -- Organization -- //

  // -- Tickets -- //
  getTickets(): Observable<any> {
    let url = this._operatorApi.getTicketsUrl;

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data['All Unresolved Tickets'];
        return data;
      })
      .catch(this.handleError);
  }

  getPassengersTicketForDriver(driverUsername): Observable<any> {
    let url = this._operatorApi.getPassengersTicketForDriverUrl(driverUsername);

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }
  // -- Tickets -- //


  // -- Not Implemented -- //
  getNewPassengersCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  getPassengersCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  getOrganizationsCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  getNewOrganizationsCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  getTodayTripsCount(): Observable<ServiceType> {
    throw new Error('Not Implemented');
  }

  getOnlineTripsCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  searchTrips(str: string) {
    throw new Error('Not Implemented');
  }
  // -- Not Implemented -- //

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }

}
