import { Injectable  } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { AdminApi } from './providers';
import { Radius, ApiError } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  constructor(private _http: AuthHttpService, private _adminApi: AdminApi) { }

  removeOperator(operatorId: string): Observable<any> {
    let url = this._adminApi.deleteOperatorUrl(operatorId);

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
        return json;
      })
      .catch(this.handleError);
  }

  getServicesOfCity(cityName: string): Observable<any> {
    let url = this._adminApi.getServicesOfCityUrl(cityName);

    return this._http
      .post(url, cityName)
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

        return json;
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

        return json;
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

  getTarrif(): Observable<any> {
    let url = this._adminApi.getTarrifUrl;

    return this._http.get(url)
      .map((res: Response) => res.json);
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
