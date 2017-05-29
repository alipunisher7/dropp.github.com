import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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

  constructor(private _http: Http) {
    this.getOnlineTripsUrl = "";
    this.getTodayTripsUrl = "";
    this.getOnlineDriversUrl = "";
    this.getAllDriversUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewNumberOfAllDrivers";
    this.getNewPassengersUrl = "";
    this.getAllPassengersUrl = "";
    this.getNewOrganizationsUrl = "";
    this.getAllOrganizationsUrl = "";
    this.getDriverInfoUrl = "";
    this.viewLowRateDriverUrl = "";
  }
  getOnlineTrips(): Observable<any> {
    return this._http.get(this.getOnlineTripsUrl).map(res => res.json);
  }
  getTodayTrips(): Observable<any> {
    return this._http.get(this.getTodayTripsUrl).map(res => res.json);
  }

  getOnlineDrivers(): Observable<any> {
    let header = new Headers();
    header.append('Authorization', 'Basic c2tpbGw6YTFsMmkzIUAj');
    console.log(header);
    return this._http.get(this.getOnlineDriversUrl, header).map(res => res.json);
  }

  getAllDrivers() {
    let header: Headers = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Accept-Charset	', 'utf-8');
    header.append('Authorization', 'Basic c2tpbGw6YTFsMmkzIUAj');

    return this._http.get(this.getAllDriversUrl, header).map(res => {
      console.log('aaa');
      return res;
    });
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
    return this._http.get(this.viewLowRateDriverUrl).map(res => res.json);
  }
  searchDrivers(str: string) {
    this.searchDriversUrl = '' + str;
    return this._http.get(this.searchDriversUrl).map(res => res.json());
  }
  searchPassengers(str: string) {
    this.searchPassengersUrl = '' + str;
    return this._http.get(this.searchPassengersUrl).map(res => res.json());
  }
  searchTrips(str: string) {
    this.searchTripsUrl = '' + str;
    return this._http.get(this.searchTripsUrl).map(res => res.json());
  }
  searchDriversCredit(str: string) {
    this.searchDriversCreditUrl = '' + str;
    return this._http.get(this.searchDriversCreditUrl).map(res => res.json());
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
