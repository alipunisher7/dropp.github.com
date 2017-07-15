import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { COPApi } from './providers';
import { Radius, ApiError } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CopService {

  constructor(private _http: AuthHttpService, private _copApi: COPApi) { }

  insertManufacture(manufacture) {
    let url = this._copApi.insertManufactureUrl;

    return this._http
      .post(url, manufacture)
      .map(res => res)
      .catch(this.handleError);
  }

  insertCar(car) {
    let url = this._copApi.insertCarUrl;

    return this._http
      .post(url, car)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        return json;
      })
      .catch(this.handleError);
  }

  getManufacture() {
    let url = this._copApi.getManufacturesUrl;

    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        return json;
      })
      .catch(this.handleError);
  }

  getDistanceByVehicleId(vehicleId) {
    let url = this._copApi.getDistanceByVehicleIdUrl(vehicleId);

    return this._http
      .get(url)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        return json;
      })
      .catch(this.handleError);
  }

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }
}
