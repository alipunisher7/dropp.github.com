import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { User } from 'models';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http, private _auth: AuthService) {
    this.login();
  }

  login() {
    let user = new User({ username: 'ali', password: '123456' })
    this._auth.login(user);
  }

  createRequestOptions(): RequestOptions {
    let headers = new Headers();
    // headers.append('Content-Type', 'application/json')
    // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTkyMzU0NzV9.TgJ0iRbFuNmQb38qQKgPD1l11D-xwRl0GSnGEEOViXxzKQ-ncdc_hXDzJwsdwv5Vg2CCvayYLii3q03YlMKtDg')

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this._auth.token)

    let options = new RequestOptions({ headers: headers });
    return options;
  }

  search(url, params) {
    let options = this.createRequestOptions();
    options.search = params;
    return this.http.get(url, options);
  }

  get(url) {
    let options = this.createRequestOptions();
    return this.http.get(url, options);
  }

  post(url, data) {
    let options = this.createRequestOptions();
    let body = JSON.stringify(data);
    console.log(body);

    return this.http.post(url, body, options);
  }

  put(url, data) {
    let options = this.createRequestOptions();
    let body = JSON.stringify(data);
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
