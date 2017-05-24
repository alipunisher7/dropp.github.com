import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AdminService {
  private AddMOpUrl: string;
  private viewTarrifUrl: string;
  constructor(private _http: Http) {
    this.AddMOpUrl = "";
  }

  addMOp(operatorData): Observable<any> {
    let body = JSON.stringify(operatorData);
    let header = new Headers();

    return this._http.post('', body, header).map(res => res);
  }
  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl', { headers: this.getHeaders() }).map(res => res.json);
  }
  changeTarrif(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  insertManufacture(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  insertCar(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application / json');
    return headers;
  }
}
