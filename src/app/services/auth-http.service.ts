import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { User } from '../models';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http, private _auth: AuthService) {
    this.login();
  }

  login() {
    let user = new User({username: 'hamidfarmani', password: '123456'})
    this._auth.login(user);
  }

  createRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('Token: ', this._auth.token);
    headers.append('Authorization', this._auth.token)
    let options = new RequestOptions({ headers: headers });
    return options;
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
