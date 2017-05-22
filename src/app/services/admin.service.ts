import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdminService {
  private AddMOpUrl: string;
  constructor(private _http: Http) {
    this.AddMOpUrl = "";
  }

  addMOp(operatorData): Observable<any> {
    let body = JSON.stringify(operatorData);
    let header = new Headers();

    return this._http.post('', body, header).map(res => res);
  }


}
