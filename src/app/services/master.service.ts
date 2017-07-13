import { Injectable  } from '@angular/core';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { MasterApi } from 'configs';
import { Radius } from 'models';

import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {

  constructor(private _http: AuthHttpService, private _masterApi: MasterApi) { }

  addOperator(data): Observable<any> {
    let url = this._masterApi;

    return this._http
      .post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
          throw error;
        }
        return true;
      })
      .catch(this.handleError);
  }

  getTarrif(): Observable<any> {
    let url = this._masterApi;

    return this._http.get(url)
      .map(res => res.json);
  }

  insertTicketSubject(data) {
    let url = this._masterApi.insertTicketSubjectUrl;
    return this._http
      .post(url, data)
      .map(res => {
        let json = res.json();
        if (json.statusCode !== 1) {
          let error = { url, status: json.status, statusCode: json.statusCode };
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
