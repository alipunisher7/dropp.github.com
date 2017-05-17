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
    this.getAllDriversUrl = "";
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
    return this._http.get(this.getAllDriversUrl).map(res => res.json);
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
}
