import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { IUser, User, ApiError } from 'models';
import { API_URL } from 'configs';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'utils/jwt-helper';
import 'rxjs/operator/do';

@Injectable()
export class AuthService {
  currentUser: User;
  // private jwtHelper = new JwtHelper();
  private _cachedToken: string;
  get token(): string {
    return this._cachedToken || this.getToken();
  }

  constructor(private _http: Http, private _router: Router) { }

  getToken(): string {
    this._cachedToken = localStorage.getItem('token');
    this.getUserInfoFromToken();
    return this._cachedToken;
  }

  getUserInfoFromToken(token?) {
    token = token || this._cachedToken;
    if (!token) {
      return;
    }
    try {
      console.log(token)
      let decoded = new JwtHelper().decodeToken(this._cachedToken);
      this.currentUser = new User({ username: decoded.sub, role: decoded.role });
      console.log('currentUser', this.currentUser);
    } catch (e) {
      this.signout();
    }

  }

  // // getNewToken(): string {
  // //   console.warn('Cached token not found');
  // //   let token;
  // //   if (!this.currentUser || !localStorage.getItem('token')) {
  // //     // TODO : Login
  // //     this.login({ username: 'admin', password: 'admin' });
  // //     return;
  // //     // console.error('[AuthService]: User not existed');
  // //     // throw 'Current user not found, NAVIGATION TO LOGIN';
  // //   }
  //
  //   token = localStorage.getItem('token');
  //   this._cachedToken = token;
  //   return token;
  // }

  isLoggedIn(): boolean {
    let isLoggedIn = Boolean(this.currentUser) || Boolean(this.token);
    console.log('currentUser', this.currentUser);
    console.log('token', this.token);
    return isLoggedIn;
  }

  login(user: IUser) {
    this.currentUser = new User(user);
    console.log('Login In: ');

    let body = JSON.stringify(user);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(`${API_URL}/login`, body, options)
      .map(this.handleAuthResonse)
      .catch(this.handleError);
  }

  refreshToken() {
    let body = JSON.stringify(this._cachedToken);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://31.184.132.215:8080/geno/TSO/api/rest/refreshToken', body, options)
      .map(this.handleAuthResonse);
  }

  signout() {
    this.currentUser = null;
    this.unsetToken();
    this._router.navigate(['login']);
  }

  handleAuthResonse = (res) => {
    console.log('res: ', res);
    let token = res.headers.get('Authorization');
    this.setToken(token);
    let json = res.json();

    if (json.statusCode !== 1) {
      throw new ApiError('Login', json)
    }

    console.log('getUserInfoFromToken');
    this.getUserInfoFromToken();
    return token;
  }

  // register(user: User) {
  //   let bodyString = JSON.stringify(user);
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //
  // return this._http.post('http://31.184.132.215:8080/geno/TSO/api/rest/admin/login', body, options)
  // .map((res: Response) => {
  //     console.log(res.headers);
  //     console.log(res.headers.get('Authorization'));
  //     console.log('Json');
  //     console.log(res.json());
  //     if (res.json().success === true) {
  //       let token = res.json().token;
  //       this.setToken(token);
  //     }
  //     return res.json();
  //   })
  // .subscribe(console.log);

  setToken(token) {
    this._cachedToken = token;
    localStorage.setItem('token', token);
  }

  unsetToken() {
    this._cachedToken = null;
    localStorage.removeItem('token');
  }

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }
}
