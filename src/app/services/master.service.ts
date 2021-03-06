import { Injectable  } from '@angular/core';
import { Response, URLSearchParams  } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { MasterApi } from './providers';
import { Radius, ApiError, ISearchParam, Operator } from 'models';

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
  updateOperator(id, data) {
    let url = this._masterApi.updateOperatorUrl(id);
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
        let data = json.data.primarySubjects;
        return data;
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
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }
  searchOperators(param: ISearchParam) {
    let url = this._masterApi.searchOperatorsUrl;

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
        let data = json.data.operators.map(operator => new Operator(operator));
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  banDriver(username: string) {
    let url = this._masterApi.banOperatorUrl;
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
  unBanDriver(username: string) {
    let url = this._masterApi.unBanOperatorUrl;
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

  updateVoucher(id, data) {
    let url = this._masterApi.updateVoucherUrl(id);
    let body = data;

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
  opChangePass(username, data) {
    let url = this._masterApi.opChangePassUrl(username);
    let body = data;

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

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }
}
