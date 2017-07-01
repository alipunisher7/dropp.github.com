import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http) {
  }

  createRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoYW1pZG9mIiwicm9sZSI6IkEiLCJpc3MiOiJHRU5PIENvIiwiaWF0IjoxNDk1OTU4ODE2LCJleHAiOjE0OTYwNDUyMTZ9.huUhr3j_e2kr3HbB8yinWC7uDwglc2Z_K0DTF73jehr_IDS9Vl18gDzIzdpeZpkduu6FjLMXMxWyGFcah4yGgg')
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
