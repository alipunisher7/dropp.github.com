import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  private AddMOpUrl: string;
  private viewTarrifUrl: string;
  private submitTarrifUrl: string;
  private insertManufactureUrl: string;
  private insertCarUrl: string;
  private viewActiveServicesUrl: string;
  private submitActiveServicesUrl: string;
  private viewRadiusUrl: string;
  private submitRadiusUrl: string;
  constructor(private _http: Http) {
    this.AddMOpUrl = "";
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = "";
    this.insertManufactureUrl = "";
    this.insertCarUrl = "";
    this.viewActiveServicesUrl = "";
    this.submitActiveServicesUrl = "";
    this.viewRadiusUrl = "";
    this.submitRadiusUrl = "";
  }

  addMOp(operatorData): Observable<any> {
    let body = JSON.stringify(operatorData);
    let header = new Headers();

    return this._http.post('', body, header).map(res => res);
  }
  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl', { headers: this.getHeaders() }).map(res => res.json);
  }
  submitTarrif(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  insertManufacture(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  insertCar(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  viewActiveServices() {
    return this._http.get('viewActiveServicesUrl', { headers: this.getHeaders() }).map(res => res.json);
  }
  submitActiveServices(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  viewRadius() {
    return this._http.get('viewActiveServicesUrl', { headers: this.getHeaders() }).map(res => res.json);
  }
  submitRadius(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application / json');
    return headers;
  }
}
