import { Injectable  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AdminService {

  private getManufacturesUrl: string;
  private AddMOpUrl: string;
  private viewTarrifUrl: string;
  private submitTarrifUrl: string;
  private insertManufactureUrl: string;
  private insertCarUrl: string;
  private viewActiveServicesUrl: string;
  private submitActiveServicesUrl: string;
  private viewRadiusUrl: string;
  private submitRadiusUrl: string;

  constructor(private _http: Http) {
    this.AddMOpUrl = "";
    this.viewTarrifUrl = "";
    this.submitTarrifUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/tariff/tariffRegister";
    this.insertManufactureUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/manufactureRegister";
    this.insertCarUrl = "";
    this.viewActiveServicesUrl = "";
    this.submitActiveServicesUrl = "";
    this.viewRadiusUrl = "";
    this.submitRadiusUrl = "";

    // TODO: test
    this.getManufacturesUrl = "http://31.184.132.215:8080/geno/TSO/api/rest/cop/allManufactures";
  }

  addMOp(operatorData): Observable<any> {
    let body = JSON.stringify(operatorData);
    let header = new Headers();

    return this._http.post('', body, header).map(res => res);
  }

  viewTarrif(): Observable<any> {
    return this._http.get('viewTarrifUrl', { headers: this.getHeaders() }).map(res => res.json);
  }

  submitTarrif(data) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTYzMTg1MTR9.mMoOmcrAbEmBZZLU9ucCg67WXYaJmgxxkQjpyDkhH_wQXo8oEJBpKQ0gHSymCgYDMO1mlW5H5YT5B681ZL_J7A');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.submitTarrifUrl, body, options).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  insertManufacture(data) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTYzMTg1MTR9.mMoOmcrAbEmBZZLU9ucCg67WXYaJmgxxkQjpyDkhH_wQXo8oEJBpKQ0gHSymCgYDMO1mlW5H5YT5B681ZL_J7A');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.insertManufactureUrl, body, options).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getManufacture() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTg4OTAzMjZ9.bLmHxTrzY4PruhVhb_btH2xT3tnvbVBp8X_YzfsARqVDaeMvn22V4hJZLqKfNrJFTn4WdN3qX8krkKbLEsmIRA');
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.insertManufactureUrl, options).map(res => res.json).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  insertCar(data) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTYzMTg1MTR9.mMoOmcrAbEmBZZLU9ucCg67WXYaJmgxxkQjpyDkhH_wQXo8oEJBpKQ0gHSymCgYDMO1mlW5H5YT5B681ZL_J7A');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.insertCarUrl, body, options).map(res => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  viewActiveServices() {
    return this._http.get('viewActiveServicesUrl', { headers: this.getHeaders() }).map(res => res.json);
  }

  submitActiveServices(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }

  viewRadius() {
    return this._http.get('viewActiveServicesUrl', { headers: this.getHeaders() }).map(res => res.json);
  }

  submitRadius(data) {
    let body = JSON.stringify(data);
    return this._http.post('', body, { headers: this.getHeaders() }).map(res => res);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTYzMTg1MTR9.mMoOmcrAbEmBZZLU9ucCg67WXYaJmgxxkQjpyDkhH_wQXo8oEJBpKQ0gHSymCgYDMO1mlW5H5YT5B681ZL_J7A');
    let options = new RequestOptions({ headers: headers });
    return headers;
  }

  getManufactures() {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrYXNyYSIsInJvbGUiOiJEIiwiaXNzIjoiR0VOTyBDbyIsImlhdCI6MTQ5NTg3MjgyOCwiZXhwIjoxNDk2NzM2ODI4fQ.8-4KzOtaBhFVqpCfDWO1GpwdPiZgvEh3zP6EYNFM80SvA6VpHhR8iQcjjT7tFZLo7PRhGjtmVVGCMAQq_dzgig');
    let options = new RequestOptions({ headers: header });

    return this._http.get(this.getManufacturesUrl, options).map(data => {
      console.log("-");
      return data.json();
    });
  }
}
