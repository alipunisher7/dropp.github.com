import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';

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
  private getManufacturesUrl: string;

  constructor(private _http: AuthHttpService) {
    this.AddMOpUrl = "";
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/tariff/tariffRegister";
    this.insertManufactureUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/manufactureRegister";
    this.insertCarUrl = "";
    this.viewActiveServicesUrl = "";
    this.submitActiveServicesUrl = "";
    this.viewRadiusUrl = "";
    this.submitRadiusUrl = "";

    // TODO: test
    this.getManufacturesUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/allManufactures";
    this.voucherRegisterUrl = "http://192.168.1.2:8585/TSTest/api/rest/admin/voucherRegister";
  }

  addMOp(data): Observable<any> {
    return this._http.post('', data).map(res => res);
  }

  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl').map(res => res.json);
  }

  submitTarrif(data) {
    return this._http.post(this.submitTarrifUrl, data).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  insertManufacture(data) {
    return this._http.post(this.insertManufactureUrl, data).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getManufacture() {
    return this._http.get(this.getManufacturesUrl).map(res => res.json).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  insertCar(data) {
    return this._http.post(this.insertCarUrl, data).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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

  getManufactures() {
    return this._http.get(this.getManufacturesUrl).map(data => {
      console.log("-");
      return data.json();
    });
  }

  getVoucher() {
    return this._http.get(this.voucherRegisterUrl).map(data => data.json());
  }
}
