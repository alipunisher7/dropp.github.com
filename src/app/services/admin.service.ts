import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ADMIN_API, COP_API, API } from 'configs';
import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  private AddMOpUrl: string;
  private AddOpUrl: string;
  private viewTarrifUrl: string;
  private submitTarrifUrl: string;
  private insertManufactureUrl: string;
  private insertCarUrl: string;
  private getActiveServicesUrl: string;
  private submitActiveServicesUrl: string;
  private viewRadiusUrl: string;
  private submitRadiusUrl: string;
  private voucherRegisterUrl: string;
  private getManufacturesUrl: string;
  private submitTicketSubjectUrl: string;

  constructor(private _http: AuthHttpService) {
    this.AddMOpUrl = `${ADMIN_API}/masterRegister`;
    this.AddOpUrl = `${API}/master/operatorRegister`;
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = `${API}/tariff/tariffRegister`;
    this.getActiveServicesUrl = `${ADMIN_API} /viewActiveServices`;
    this.submitActiveServicesUrl = `${ADMIN_API}/activeServiceRegister`;
    this.viewRadiusUrl = `${ADMIN_API}/viewSearchRadius`;
    this.submitRadiusUrl = `${ADMIN_API}/searchRadiusRegister`;

    // TODO: test
    this.insertManufactureUrl = `${COP_API}/manufactureRegister`;
    this.insertCarUrl = `${COP_API}/carRegister`;
    this.getManufacturesUrl = `${COP_API}/allManufactures`;
    this.voucherRegisterUrl = "";
    this.submitTicketSubjectUrl = `${API}/master/ticketSubjectRegister`;
  }

  addMOp(data): Observable<any> {
    return this._http
      .post(this.AddMOpUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.AddMOpUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
  }
  addOp(data): Observable<any> {
    return this._http
      .post(this.AddOpUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.AddOpUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
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
        return true;
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

  getActiveServices(data) {
    return this._http
      .post(this.getActiveServicesUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.getActiveServicesUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json.data.activeServices;
      })
      .catch(this.handleError);
  }

  submitActiveServices(data) {
    return this._http
      .post(this.submitActiveServicesUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.submitActiveServicesUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
  }

  viewRadius() {
    return this._http
      .get(this.viewRadiusUrl)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.viewRadiusUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        let data = json.data.searchRadius;
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
        return true;
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

  getVoucher(data) {
    return this._http
      .post(this.voucherRegisterUrl, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url: this.voucherRegisterUrl, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return json.data;
      })
      .catch(this.handleError);
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
