import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';

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
  private voucherRegisterUrl: string;

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
    this.voucherRegisterUrl = "http://192.168.1.2:8585/TSTest/api/rest/admin/voucherRegister";
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

  getVoucher() {
    let header = new Headers();
    header.append('Content-Type', 'application/json')
    header.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1pZG9mIiwicm9sZSI6IkEiLCJpc3MiOiJHRU5PIENvIiwiaWF0IjoxNDk1OTU4ODE2LCJleHAiOjE0OTYwNDUyMTZ9.huUhr3j_e2kr3HbB8yinWC7uDwglc2Z_K0DTF73jehr_IDS9Vl18gDzIzdpeZpkduu6FjLMXMxWyGFcah4yGgg')

    let options = new RequestOptions({ headers: header });

    return this._http.get(this.voucherRegisterUrl, options).map(data => data.json());
  }
}
