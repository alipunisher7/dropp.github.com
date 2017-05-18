import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  }
  getOnlineTrips() {
    return this._http.get(this.getOnlineTripsUrl).map(res => res.json);
  }
  getTodayTrips() {
    return this._http.get(this.getTodayTripsUrl).map(res => res.json);
  }
  getOnlineDrivers() {
    return this._http.get(this.getOnlineDriversUrl).map(res => res.json);
  }
  getAllDrivers() {
    let header: Headers = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Accept-Charset	', 'utf-8');

    return this._http.get(this.getAllDriversUrl, header).map(res => {
      console.log('aaa');
      return res;
    });
  }
  getNewPassengers() {
    return this._http.get(this.getNewPassengersUrl).map(res => res.json);
  }
  getAllPassengers() {
    return this._http.get(this.getAllPassengersUrl).map(res => res.json);
  }
  getNewOrganizations() {
    return this._http.get(this.getNewOrganizationsUrl).map(res => res.json);
  }
  getAllOrganizations() {
    return this._http.get(this.getAllOrganizationsUrl).map(res => res.json);
  }
  getDriverInfo() {
    return this._http.get(this.getDriverInfoUrl).map(res => res.json);
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
