import { Injectable } from '@angular/core';
import { User } from '../models';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class AuthService {
  currentUser: User;
  // private jwtHelper = new JwtHelper();
  private _cachedToken: string;
  get token(): string {
    return this._cachedToken || this.getNewToken();
  }


  constructor(private _http: Http) { }


  getNewToken(): string {
    let token;
    if (!this.currentUser || !localStorage.getItem('token')) {
      console.error('[AuthService]: User not existed');
      throw 'Current user not found, NAVIGATION TO LOGIN';
    }

    token = localStorage.getItem('token');
    this._cachedToken = token;
    return token;
  }

  login(user: User) {
    this.currentUser = user;
    console.log('Login In: ');

    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let obs = this._http.post('http://192.168.1.7:8080/TSTest/api/rest/admin/login', body, options)
      .map(this.handleAuthResonse)
      .subscribe(console.log);
  }

  refreshToken() {
    let body = JSON.stringify(this._cachedToken);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://31.184.132.215:8080/geno/TSO/api/rest/refreshToken', body, options)
      .map(this.handleAuthResonse)
      .subscribe(console.log);
  }

  signout() {
    this.unsetToken();
  }

  handleAuthResonse(res) {
    let token = res.headers.get('Authorization');
    this.setToken(token);
    if (res.ok && res.status !== 200) {
      let error = { request: 'login', ...res.json() };
      throw error;
    }

    return res.json();
  }
  // register(user: User) {
  //   let bodyString = JSON.stringify(user);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //
  //   return this._http.post('/api/register', bodyString, options).map((res: Response) => {
  //     console.log(res.json());
  //     return res.json();
  //   });
  // }

  setToken(token) {
    this._cachedToken = token;
    localStorage.setItem('token', token);
  }

  unsetToken() {
    this._cachedToken = null;
    localStorage.removeItem('token');
  }
}
