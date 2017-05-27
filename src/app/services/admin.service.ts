import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';

@Injectable()
export class AdminService {

  getManufacturesUrl: string;

  constructor(private _http: Http) {
    this.getManufacturesUrl = "http://127.0.0.1:8080/TSTest/api/rest/driver/manufactures";
  }

  getManufactures() {
    console.log('Getting manufactures');
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
