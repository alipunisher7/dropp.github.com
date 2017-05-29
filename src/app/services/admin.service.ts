import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';

@Injectable()
export class AdminService {

  private getManufacturesUrl: string;
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

    // TODO: test
    this.getManufacturesUrl = "http://127.0.0.1:8080/TSTest/api/rest/driver/manufactures";
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

  getManufactures() {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXNyYSIsInJvbGUiOiJEIiwiaXNzIjoiR0VOTyBDbyIsImlhdCI6MTQ5NTg3MjgyOCwiZXhwIjoxNDk2NzM2ODI4fQ.8-4KzOtaBhFVqpCfDWO1GpwdPiZgvEh3zP6EYNFM80SvA6VpHhR8iQcjjT7tFZLo7PRhGjtmVVGCMAQq_dzgig');
    let options = new RequestOptions({ headers: header });

    return this._http.get(this.getManufacturesUrl, options).map(data => {
      console.log("-");
      return data.json();
    });
  }
}
