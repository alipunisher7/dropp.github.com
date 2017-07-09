import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType } from 'models'
import { OPERATOR_API } from 'configs';
import 'rxjs/add/operator/map';

@Injectable()
export class OperatorService {

  private getOnlineTripsUrl: string;
  private getTodayTripsUrl: string;
  private getOnlineDriversUrl: string;
  private getAllDriversUrl: string;
  private getNewPassengersUrl: string;
  private getAllPassengersUrl: string;
  private getNewOrganizationsUrl: string;
  private getAllOrganizationsUrl: string;
  private getDriverInfoUrl: string;
  private getDriversCreditUrl: string;
  private getLowRateDriverUrl: string;
  private getBannedDriversUrl: string;
  private getBannedPassengersUrl: string;
  private getOrganizationsUrl: string;
  private searchDriversUrl: string;
  private searchPassengersUrl: string;
  private searchTripsUrl: string;
  private searchDriversCreditUrl: string;
  private banDriverUrl: string;
  private banPassengerUrl: string;
  private subscribeRegisterUrl: string;

  constructor(private _http: AuthHttpService) {
    this.getOnlineTripsUrl = ``;
    this.getTodayTripsUrl = ``;
    this.getOnlineDriversUrl = ``;
    this.getAllDriversUrl = `${OPERATOR_API}/viewNumberOfAllDrivers`;
    this.getNewPassengersUrl = ``;
    this.getAllPassengersUrl = ``;
    this.getNewOrganizationsUrl = ``;
    this.getAllOrganizationsUrl = ``;
    this.getDriverInfoUrl = ``;
    this.getLowRateDriverUrl = `${OPERATOR_API}/LowRateDrivers`;
    this.getDriversCreditUrl = `${OPERATOR_API}/viewAllDriverCredit`;
    this.getBannedDriversUrl = `${OPERATOR_API}/viewBanDrivers`;
    this.getBannedPassengersUrl = `${OPERATOR_API}/viewBanPassengers`;
    this.getOrganizationsUrl = ``;
    this.searchDriversCreditUrl = `${OPERATOR_API}/viewDriverCredit`;
    this.searchDriversUrl = `${OPERATOR_API}/searchDriver`;
    this.searchPassengersUrl = `${OPERATOR_API}/searchPassenger`;
    this.banDriverUrl = `${OPERATOR_API}/banDriver`;
    this.banPassengerUrl = `${OPERATOR_API}/banPassenger`;
    this.subscribeRegisterUrl = `${OPERATOR_API}/subscribeRegister`;
  }

  getOnlineTrips(): Observable<any> {
    return this._http.get(this.getOnlineTripsUrl).map(res => res.json);
  }

  getTodayTrips(): Observable<ServiceType> {
    return this._http.get(this.getTodayTripsUrl).map(res => new ServiceType(res.json));
  }

  getOnlineDrivers(): Observable<any> {

    return this._http.get(this.getOnlineDriversUrl).map(res => res.json().data);
  }

  getAllDrivers(): Observable<object> {
    return this._http.get(this.getAllDriversUrl).map(res => res.json().data);
  }

  getNewPassengers(): Observable<any> {
    return this._http.get(this.getNewPassengersUrl).map(res => res.json);
  }

  getAllPassengers(): Observable<any> {
    return this._http.get(this.getAllPassengersUrl).map(res => res.json);
  }

  getNewOrganizations(): Observable<any> {
    return this._http.get(this.getNewOrganizationsUrl).map(res => res.json);
  }

  getAllOrganizations(): Observable<any> {
    return this._http.get(this.getAllOrganizationsUrl).map(res => res.json);
  }

  getOrganizations(data): Observable<any> {
    data = { "username": data };
    console.log(data);
    return this._http.post(this.getOrganizationsUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getOrganizationsUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        // let data = json.data.Driver;
        return data;
      })
      .catch(this.handleError);
  }

  getDriverInfo(): Observable<any> {
    return this._http.get(this.getDriverInfoUrl).map(res => res.json);
  }

  getLowRateDriver(): Observable<any> {
    return this._http
      .get(this.getLowRateDriverUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getLowRateDriverUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data.users.Drivers;
        return data;
      })
      .catch(this.handleError);
  }

  searchDrivers(data) {
    data = { "username": data };
    console.log(data);
    return this._http.post(this.searchDriversUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.searchDriversUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.Driver;
        return data;
      })
      .catch(this.handleError);
  }

  searchPassengers(data) {
    data = { "username": data };
    console.log(data);
    return this._http.post(this.searchPassengersUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.searchPassengersUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.Passenger;
        return data;
      })
      .catch(this.handleError);
  }

  searchTrips(str: string) {
    this.searchTripsUrl = '' + str;
    return this._http.get(this.searchTripsUrl).map(res => res.json());
  }

  searchDriversCredit(data) {
    data = { "username": data };
    return this._http.post(this.searchDriversCreditUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.searchDriversCreditUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data['driver'];
        return data;
      })
      .catch(this.handleError);
  }

  getDriversCredit() {
    return this._http
      .get(this.getDriversCreditUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getDriversCreditUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['driversCredit'];
        return data;

      })
      .catch(this.handleError);
  }

  getBannedDrivers() {
    return this._http
      .get(this.getBannedDriversUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getBannedDriversUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['banDrivers'];
        return data;
      })
      .catch(this.handleError);
  }

  getBannedPassengers() {
    return this._http
      .get(this.getBannedPassengersUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getBannedPassengersUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['banPassengers'];
        return data;
      })
      .catch(this.handleError);
  }
  banDriver(data) {
    data = { "username": data };
    return this._http.post(this.banDriverUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.banDriverUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
  }
  banPassenger(data) {
    data = { "username": data };
    return this._http.post(this.banPassengerUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.banPassengerUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
  }
  subscribeRegister(data) {
    return this._http.post(this.subscribeRegisterUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.subscribeRegisterUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
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
