import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http) {
  }

  createRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGkiLCJyb2xlIjoiQSIsImlzcyI6IkdFTk8gQ28iLCJpYXQiOjE0OTg5MDY0NTl9.ORTXPW4XPXdEtUdFAcsfV-7u6xqPntQGYBgkiobMJdODZso2atIglauvS_1jghLmnuFGJupZG68BFeIPl1O2bQ')
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
