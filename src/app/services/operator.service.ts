import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType } from './../models'
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
  private viewLowRateDriverUrl: string;
  private searchDriversUrl: string;
  private searchPassengersUrl: string;
  private searchTripsUrl: string;
  private searchDriversCreditUrl: string;
  private allDriversCreditUrl: string;

  constructor(private _http: AuthHttpService) {
    this.getOnlineTripsUrl = "";
    this.getTodayTripsUrl = "";
    this.getOnlineDriversUrl = "";
    this.getAllDriversUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewNumberOfAllDrivers";
    this.getNewPassengersUrl = "";
    this.getAllPassengersUrl = "";
    this.getNewOrganizationsUrl = "";
    this.getAllOrganizationsUrl = "";
    this.getDriverInfoUrl = "";
    this.viewLowRateDriverUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/LowRateDrivers";
    this.searchDriversCreditUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewDriverCredit";
    this.allDriversCreditUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewAllDriverCredit";
  }
  getOnlineTrips(): Observable<any> {
    return this._http.get(this.getOnlineTripsUrl).map(res => res.json);
  }

  getTodayTrips(): Observable<ServiceType> {
    return this._http.get(this.getTodayTripsUrl).map(res => new ServiceType(res.json));
  }

  getOnlineDrivers(): Observable<any> {
    return this._http.get(this.getOnlineDriversUrl).map(res => res.json);
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
  getDriverInfo(): Observable<any> {
    return this._http.get(this.getDriverInfoUrl).map(res => res.json);
  }
  viewLowRateDriver(): Observable<any> {
    return this._http
      .get(this.viewLowRateDriverUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }

        let data = json.data.user['Drivers'];
        console.log(data);
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
          throw new Error(JSON.stringify(json));
        }
        return true;
      })
      .catch(this.handleError);
  }
  searchPassengers(str: string) {
    this.searchPassengersUrl = '' + str;
    return this._http.get(this.searchPassengersUrl).map(res => res.json());
  }
  searchTrips(str: string) {
    this.searchTripsUrl = '' + str;
    return this._http.get(this.searchTripsUrl).map(res => res.json());
  }
  searchDriversCredit(data) {
    data = { "username": data };
    console.log(data);
    return this._http.post(this.searchDriversCreditUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }
        let data = json.data['driver'];
        return data;
      })
      .catch(this.handleError);
  }
  allDriversCredit() {
    return this._http
      .get(this.allDriversCreditUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }

        let data = json.data['driversCredit'];
        return data;

      })
      .catch(this.handleError);
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
