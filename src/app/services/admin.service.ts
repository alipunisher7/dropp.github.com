import { Injectable  } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { AdminApi } from './providers';
import { Radius, ApiError, ISearchParam, Tariff, Bugs, Services } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  constructor(private _http: AuthHttpService, private _adminApi: AdminApi) { }

  removeOperator(operatorId: string): Observable<any> {
    let url = this._adminApi.removeOperatorUrl(operatorId);

    return this._http
      .delete(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }

  insertMaster(master): Observable<any> {
    let url = this._adminApi.insertMasterUrl;

    return this._http
      .post(url, master)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }

  insertService(service): Observable<any> {
    let url = this._adminApi.insertServiceUrl;

    return this._http
      .post(url, service)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        console.log(json);
        return json;
      })
      .catch(this.handleError);
  }

  getServicesOfCity(cityName: string): Observable<any> {
    let url = this._adminApi.getServicesOfCityUrl(cityName);

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }

        let data: Services[] = json.data.activeServices.map(services => new Services(services));
        return data;
      })
      .catch(this.handleError);
  }

  insertRadius(radius): Observable<any> {
    let url = this._adminApi.insertRadiusUrl;

    return this._http
      .post(url, radius)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }

  updateRadiusByServiceType(radius): Observable<any> {
    let url = this._adminApi.updateRadiusOfServiceUrl(radius.serviceType);

    let newRadius = { radius: radius.radius };

    return this._http
      .patch(url, newRadius)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }


      })
      .catch(this.handleError);
  }

  getRadiuses(): Observable<any> {
    let url = this._adminApi.getRadiusesUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let radiuses = json.data.searchRadius.map(_ => new Radius(_));
        return radiuses;
      })
      .catch(this.handleError);
  }

  getRadiusByServiceType(serviceType: string): Observable<any> {
    let url = this._adminApi.getRadiusOfServiceUrl(serviceType);

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }

        return json;
      })
      .catch(this.handleError);
  }

  insertTarrif(tarrif) {
    let url = this._adminApi.insertTarrifUrl;
    console.log(tarrif);
    return this._http
      .post(url, tarrif)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }
  updateTariff(tarrif): Observable<any> {
    let url = this._adminApi.updateTariffUrl;
    console.log(tarrif);
    return this._http
      .patch(url, tarrif)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        return json;
      })
      .catch(this.handleError);
  }

  getTarrif(cityName: string): Observable<any> {
    let url = this._adminApi.getTarrifUrl(cityName);

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.tariffs.map(tariff => new Tariff(tariff));
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  banMaster(username) {
    let url = this._adminApi.banMasterUrl;
    let body = { username }
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
  unBanMaster(username) {
    let url = this._adminApi.unBanMasterUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
  }

  enableService(serviceID) {
    let url = this._adminApi.enableServiceUrl(serviceID);
    let body = '';
    return this._http
      .patch(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }

        return json;
      })
      .catch(this.handleError);
  }
  disableService(serviceID) {
    let url = this._adminApi.disableServiceUrl(serviceID);
    let body = '';
    return this._http
      .patch(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }

        return json;
      })
      .catch(this.handleError);
  }
  getBugs() {
    let url = this._adminApi.getBugsUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
        }
        let data = json.data.bugs.map(bugs => new Bugs(bugs));
        console.log(data);
        console.log(json);
        return data;
      })
      .catch(this.handleError);
  }
  resolveBug(id: number) {
    let url = this._adminApi.resolveBugUrl(id);
    let body = '';
    return this._http.patch(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getSystemSetting() {
    let url = this._adminApi.getSystemSettingUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.systemSetting;
        console.log(data)
        return data;
      })
      .catch(this.handleError);
  }
  updateSystemSetting(data) {
    let url = this._adminApi.updateSystemSettingUrl;
    return this._http.patch(url, data)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  insertState(state) {
    let url = this._adminApi.insertStateUrl;
    return this._http.post(url, state)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  insertCity(data) {
    let url = this._adminApi.insertCityUrl(data.id);
    return this._http.post(url, data)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getDriversAgeReport() {
    let url = this._adminApi.getDriversAgeReportUrl;
    return this._http.getReport(url);
  }
  getTripReport() {
    let url = this._adminApi.getTripReportUrl;
    return this._http.getReport(url);
  }
  getPassengersAgeReport() {
    let url = this._adminApi.getPassengersAgeReportUrl;
    return this._http.getReport(url);
  }
  getOperatorsAgeReport() {
    let url = this._adminApi.getOperatorsAgeReportUrl;
    return this._http.getReport(url);
  }
  insertProvider(data) {
    let url = this._adminApi.insertProviderUrl;
    return this._http.post(url, data)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  getTripsCostReport() {
    let url = this._adminApi.getTripsCostReportUrl;
    return this._http.getReport(url);
  }
  getDevicesReport() {
    let url = this._adminApi.getDevicesReportUrl;
    return this._http.getReport(url);
  }
  getAllProviderClaimReport() {
    let url = this._adminApi.getAllProviderClaimReportUrl;
    return this._http.getReport(url);
  }
  getPeakTripsReport() {
    let url = this._adminApi.getPeakTripsReportUrl;
    return this._http.getReport(url);
  }


  // getTarrif(): Observable<any> {
  //   let url = this._adminApi.getTarrifUrl;
  //
  //   return this._http.get(url)
  //     .map((res: Response) => res.json);
  // }

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }
}
