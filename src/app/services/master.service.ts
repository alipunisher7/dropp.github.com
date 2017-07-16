import { Injectable  } from '@angular/core';
import { Response  } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { MasterApi } from './providers';
import { Radius, ApiError } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MasterService {

  constructor(private _http: AuthHttpService, private _masterApi: MasterApi) { }

  insertOperator(data): Observable<any> {
    let url = this._masterApi.insertOperatorUrl;

    return this._http
      .post(url, data)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return true;
      })
      .catch(this.handleError);
  }

  removeOperator(operatorId) {
    let url = this._masterApi.removeOperatorUrl(operatorId);

    return this._http
      .delete(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return true;
      })
      .catch(this.handleError);
  }

  insertTicketSubject(subject) {
    let url = this._masterApi.insertTicketSubjectUrl;
    return this._http
      .post(url, subject)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getTicketSubjects() {
    let url = this._masterApi.getTicketSubjectsUrl;
    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  insertVoucher(voucher) {
    let url = this._masterApi.insertVoucherUrl;

    return this._http
      .post(url, voucher)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json)
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
