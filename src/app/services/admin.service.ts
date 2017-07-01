import { Injectable } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
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

  constructor(private _http: AuthHttpService) {
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

  addMOp(data): Observable<any> {
    return this._http.post('', data).map(res => res);
  }

  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl').map(res => res.json);
  }

  submitTarrif(data) {
    return this._http.post('', data).map(res => res);
  }

  insertManufacture(data) {
    return this._http.post('', data).map(res => res);
  }

  insertCar(data) {
    return this._http.post('', data).map(res => res);
  }

  viewActiveServices() {
    return this._http.get('viewActiveServicesUrl').map(res => res.json);
  }

  submitActiveServices(data) {
    return this._http.post('', data).map(res => res);
  }

  viewRadius() {
    return this._http.get('viewActiveServicesUrl').map(res => res.json);
  }

  submitRadius(data) {
    return this._http.post('', data).map(res => res);
  }

  getVoucher() {
    return this._http.get(this.voucherRegisterUrl).map(data => data.json());
  }
}
