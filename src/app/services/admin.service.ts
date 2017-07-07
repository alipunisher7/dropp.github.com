import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ADMIN_API, COP_API } from 'configs';
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
  private submitTicketSubjectUrl: string;

  constructor(private _http: AuthHttpService) {
    this.AddMOpUrl = "";
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = `${ADMIN_API}/tariff/tariffRegister`;
    this.viewActiveServicesUrl = "";
    this.submitActiveServicesUrl = "";
    this.viewRadiusUrl = `${ADMIN_API}/viewSearchRadiusByServiceType`;
    this.submitRadiusUrl = `${ADMIN_API}/searchRadiusRegister`;

    // TODO: test
    this.insertManufactureUrl = `${COP_API}/manufactureRegister`;
    this.insertCarUrl = `${COP_API}/carRegister`;
    this.getManufacturesUrl = `${COP_API}/allManufactures`;
    this.voucherRegisterUrl = "";
    this.submitTicketSubjectUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/master/ticketSubjectRegister";
  }

  addMOp(data): Observable<any> {
    return this._http.post('', data)
      .map(res => res);
  }

  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl')
      .map(res => res.json);
  }

  submitTarrif(data) {
    return this._http
      .post(this.submitTarrifUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.submitTarrifUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json;
      })
      .catch(this.handleError);
  }

  insertManufacture(data) {
    return this._http
      .post(this.insertManufactureUrl, data)
      .map(res => res)
      .catch(this.handleError);
  }

  getManufacture() {
    return this._http
      .get(this.getManufacturesUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.insertManufactureUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }

        let data = json.data['All Manufacture'];
        return data;
      })
      .catch(this.handleError);
  }

  insertCar(data) {
    return this._http
      .post(this.insertCarUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.insertCarUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json;
      })
      .catch(this.handleError);
  }

  viewActiveServices() {
    return this._http
      .get(this.viewActiveServicesUrl)
      .map(res => res.json);
  }

  submitActiveServices(data) {
    return this._http
      .post('', data)
      .map(res => res);
  }

  viewRadius(data) {
    return this._http
      .post(this.viewRadiusUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.viewRadiusUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.searchRadius[0].radius;
        return data;
      })
      .catch(this.handleError);
  }

  submitRadius(data) {
    return this._http
      .post(this.submitRadiusUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.submitRadiusUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json;
      })
      .catch(this.handleError);
  }

  getManufactures() {
    return this._http
      .get(this.getManufacturesUrl)
      .map(data => {
        return data.json();
      });
  }

  getVoucher() {
    return this._http
      .get(this.voucherRegisterUrl)
      .map(data => data.json());
  }

  insertTicketSubject(data) {
    return this._http
      .post(this.submitTicketSubjectUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.submitTicketSubjectUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json;
      })
      .catch(this.handleError);
  }


  handleError(err: any) {
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
