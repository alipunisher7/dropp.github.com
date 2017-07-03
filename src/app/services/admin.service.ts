import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
  private viewBanDriversUrl: string;
  private viewBanPassengersUrl: string;

  constructor(private _http: AuthHttpService) {
    this.AddMOpUrl = "";
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/tariff/tariffRegister";
    this.insertManufactureUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/manufactureRegister";
    this.insertCarUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/carRegister";
    this.viewActiveServicesUrl = "";
    this.submitActiveServicesUrl = "";
    this.viewRadiusUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/admin/viewSearchRadiusByServiceType";
    this.submitRadiusUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/admin/searchRadiusRegister";

    // TODO: test
    this.getManufacturesUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/allManufactures";
    this.voucherRegisterUrl = "";
    this.viewBanDriversUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewBanDrivers";
    this.viewBanPassengersUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/operator/viewBanPassenger";
  }

  addMOp(data): Observable<any> {
    return this._http.post('', data).map(res => res);
  }

  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl').map(res => res.json);
  }

  submitTarrif(data) {
    return this._http.post(this.submitTarrifUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }
        return true;
      })
      .catch(this.handleError);
  }

  insertManufacture(data) {
    return this._http.post(this.insertManufactureUrl, data)
      .map(res => res)
      .catch(this.handleError);
  }
  getManufacture() {
    return this._http
      .get(this.getManufacturesUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }

        let data = json.data['All Manufacture'];
        return data;
      })
      .catch(this.handleError);
  }

  insertCar(data) {
    return this._http.post(this.insertCarUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }
        return true;
      })
      .catch(this.handleError);
  }

  viewActiveServices() {
    return this._http.get(this.viewActiveServicesUrl).map(res => res.json);
  }

  submitActiveServices(data) {
    return this._http.post('', data).map(res => res);
  }

  viewRadius(data) {
    data = { "serviceType": data };
    return this._http.post(this.viewRadiusUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }
        return true;
      })
      .catch(this.handleError);
  }

  submitRadius(data) {
    return this._http.post(this.submitRadiusUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }
        return true;
      })
      .catch(this.handleError);
  }

  getManufactures() {
    return this._http.get(this.getManufacturesUrl).map(data => {
      return data.json();
    });
  }

  getVoucher() {
    return this._http.get(this.voucherRegisterUrl).map(data => data.json());
  }
  viewBanDrivers() {
    return this._http
      .get(this.viewBanDriversUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }

        let data = json.data['banDrivers'];
        return data;
      })
      .catch(this.handleError);
  }
  viewBanPassengers() {
    return this._http
      .get(this.viewBanDriversUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new Error(JSON.stringify(json));
        }

        let data = json.data['banDrivers'];
        return data;
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
}
