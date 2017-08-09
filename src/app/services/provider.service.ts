import { Injectable  } from '@angular/core';
import { Response, URLSearchParams  } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ProviderApi } from './providers';
import {  ApiError, ISearchParam } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProviderService {

  constructor(private _http: AuthHttpService, private _providerApi: ProviderApi) { }

  getDriversDebt() {
    let url = this._providerApi.driversDebtUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.drivers;
        return data;
      })
      .catch(this.handleError)
  }
  driverPay(username) {
    let url = this._providerApi.driverPayUrl(username);
    let body = '';
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }
  getDriversMostDebt() {
    let url = this._providerApi.driverMostDebtUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.mostDebts;
        console.log(data);
        return data;
      })
      .catch(this.handleError);

  }
  getdriverDebtgt(value) {
    let url = this._providerApi.driverDebtgtUrl(value);
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.mostDebts;
        console.log(data);
        return data;
      })
      .catch(this.handleError);

  }
  getproviderclaim() {
    let url = this._providerApi.providerclaimUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.debt;
        return data;
      })
      .catch(this.handleError);
  }
  searchDrivers(param: ISearchParam) {
    let url = this._providerApi.searchDriversUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.drivers;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  banDriver(username) {
    let url = this._providerApi.banDriversUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  deactiveDriver(username) {
    let url = this._providerApi.deactiveDriversUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  getDriversReport() {
    let url = this._providerApi.getDriversReportUrl;
    return this._http.getReport(url);
  }
  getProviderClaimReport() {
    let url = this._providerApi.getProviderClaimReportUrl;
    return this._http.getReport(url);
  }

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }
}
