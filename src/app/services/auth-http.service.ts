import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { AuthService } from './auth.service';
import { User } from 'models';

@Injectable()
export class AuthHttpService {
  private debugMode = false;
  constructor(private http: Http, private _auth: AuthService) {
  }

  createRequestOptions(): RequestOptions {
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json')
    // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTkyMzU0NzV9.TgJ0iRbFuNmQb38qQKgPD1l11D-xwRl0GSnGEEOViXxzKQ-ncdc_hXDzJwsdwv5Vg2CCvayYLii3q03YlMKtDg')

    headers.append('Content-Type', 'application/json;charset=UTF-8');
    headers.append('Authorization', this._auth.token)

    let options = new RequestOptions({ headers: headers });
    return options;
  }

  search(url, params) {
    let options = this.createRequestOptions();
    options.search = params;
    if (this.debugMode) console.log('GET ', `${url}?${options.params.toString()}`);
    return this.http.get(url, options);
  }

  get(url) {
    let options = this.createRequestOptions();
    if (this.debugMode) console.log('GET ', url);
    return this.http.get(url, options);
  }

  post(url, data) {
    let options = this.createRequestOptions();
    let body = JSON.stringify(data);
    if (this.debugMode) console.log('POST ', url);
    if (this.debugMode) console.log('body: ', body);
    if (this.debugMode) console.log('--POST--');

    return this.http.post(url, body, options);
  }

  postFile(url, formData) {
    let headers = new Headers();
    headers.append('Authorization', this._auth.token)

    let options = new RequestOptions({ headers: headers });
    if (this.debugMode) console.log('POST ', `${url}`);
    if (this.debugMode) console.log('FormData', formData);
    return this.http.post(url, formData, options);
  }

  getReport(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/vnd.ms-excel');
    headers.append('Authorization', this._auth.token)

    let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
    return this.http.get(url, options);
  }

  put(url, data) {
    let options = this.createRequestOptions();
    let body = JSON.stringify(data);
    if (this.debugMode) console.log('PATCH ', url);
    if (this.debugMode) console.log('body ', body);
    return this.http.put(url, body, options);
  }

  patch(url, data) {
    let options = this.createRequestOptions();
    let body = JSON.stringify(data);
    return this.http.patch(url, body, options);
  }

  delete(url) {
    let options = this.createRequestOptions();
    return this.http.delete(url, options);
  }
}
