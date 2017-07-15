import { Injectable } from '@angular/core';
import { URLSearchParams, Response } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType, ApiError, ISearchParam } from 'models'
import { OperatorApi } from 'configs';
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
        let data = json.data.Drivers;
        return data;
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

  getTodayTrips(): Observable<ServiceType> {
    let url = this._operatorApi;
    return this._http.get(url).map((res: Response) => new ServiceType(res.json));
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
        let data = json.data['driver'];
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
        let data = json.data.Passenger;
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

  getOrganizations(): Observable<any> {
    let url = this._operatorApi.getOrganizationsUrl;

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

  getTickets(): Observable<any> {
    let url = this._operatorApi.getTicketsUrl;

    return this._http.get(url).map((res: Response) => res.json);
  }

  getNewPassengers(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map((res: Response) => res.json);
  }

  getNewOrganizations(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map((res: Response) => res.json);
  }

  getAllOrganizations(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map((res: Response) => res.json);
  }

  searchTrips(str: string) {
    let url = this._operatorApi;
    return this._http.get(url).map((res: Response) => res.json());
  }

  getOnlineTrips(): Observable<any> {
    throw new Error('Not Implemented');
    // let url = this._operatorApi.getOnlineTripsUrl;
    // return this._http.get(url).map((res: Response) => res.json);
  }

  handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.json().then(err => err) || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      //return Observable.throw(err.text() || 'backend server error');
    }
    console.error(err);  // debug
    return Observable.throw(err || 'backend server error');
  }

}
