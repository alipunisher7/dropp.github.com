import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType } from 'models'
import { OperatorApi } from 'configs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';

@Injectable()
export class OperatorService {

  constructor(private _http: AuthHttpService, private _operatorApi: OperatorApi) {}

  getOnlineTrips(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getTodayTrips(): Observable<ServiceType> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => new ServiceType(res.json));
  }

  getOnlineDrivers(): Observable<any> {

let url = this._operatorApi;
    return this._http.get(url).map(res => res.json().data);
  }

  getAllDrivers(): Observable<object> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json().data);
  }

  getNewPassengers(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getAllPassengers(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getNewOrganizations(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getAllOrganizations(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getOrganizations(data): Observable<any> {
    data = { "username": data };
    console.log(data);
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        // let data = json.data.Driver;
        return data;
      })
      .catch(this.handleError);
  }

  getDriverInfo(): Observable<any> {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json);
  }

  getLowRateDriver(): Observable<any> {
    let url = this._operatorApi;
    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data.users.Drivers;
        return data;
      })
      .catch(this.handleError);
  }

  searchDrivers(data, count, offset) {
    let params = new URLSearchParams();
    params.append('q', data);
    params.append('count', count);
    params.append('offset', offset);

let url = this._operatorApi;
    return this._http.search(url, params)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.Drivers;
        return data;
      })
      .catch(this.handleError);
  }

  searchPassengers(data) {
    data = { "username": data };
    console.log(data);
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.Passenger;
        return data;
      })
      .catch(this.handleError);
  }

  searchTrips(str: string) {
    let url = this._operatorApi;
    return this._http.get(url).map(res => res.json());
  }

  searchDriversCredit(data) {
    data = { "username": data };
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data['driver'];
        return data;
      })
      .catch(this.handleError);
  }

  getDriversCredit() {
    let url = this._operatorApi;
    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['driversCredit'];
        return data;

      })
      .catch(this.handleError);
  }

  getBannedDrivers() {
    let url = this._operatorApi;
    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['banDrivers'];
        return data;
      })
      .catch(this.handleError);
  }

  getBannedPassengers() {
    let url = this._operatorApi;
    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['banPassengers'];
        return data;
      })
      .catch(this.handleError);
  }
  banDriver(data) {
    data = { "username": data };
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return data;
      })
      .catch(this.handleError);
  }
  banPassenger(data) {
    data = { "username": data };
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json;
      })
      .catch(this.handleError);
  }
  subscribeRegister(data) {
    let url = this._operatorApi;
    return this._http.post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
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

  handleRespown(res) {
    console.log(res);
    console.log('res');
    let json = res.json();

    if (!json) {
      throw new Error('Bad data');
    }

    switch (json.statusCode) {
      case 1:
        return json.data;
      default:
        throw new Error('Error');
    }
  }

}
