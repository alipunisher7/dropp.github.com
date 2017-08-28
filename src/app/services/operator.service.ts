
import { Injectable } from '@angular/core';
import { URLSearchParams, Response } from '@angular/http';
import { AuthHttpService } from './auth-http.service';
import { Observable } from 'rxjs/Observable';
import { ServiceType, ApiError, ISearchParam, Driver, Organization, SubscribeUser, Vouchers, Trip, Passenger } from 'models'
import { OperatorApi } from './providers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';

@Injectable()
export class OperatorService {

  constructor(private _http: AuthHttpService, private _operatorApi: OperatorApi) { }

  insertSubscribe(subscribe) {
    let url = this._operatorApi.insertSubscribeUrl;

    return this._http.post(url, subscribe)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  searchSubscribe(param: ISearchParam) {
    let url = this._operatorApi.searchSubscribeUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.SubscribeUsers.map((data) => new SubscribeUser(data));
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  // -- Drivers -- //
  confirmDriver(driver, provider) {
    let url = this._operatorApi.confirmDriverUrl;
    let body = {
      "username": driver,
      "providerID": provider
    }

    return this._http.patch(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getDriver(username): Observable<any> {
    let url = this._operatorApi.getDriverUrl(username);
    return this._http.get(url).map((res: Response) => res.json);
  }

  searchDrivers(param: ISearchParam) {
    let url = this._operatorApi.searchDriversUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);
    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let drivers = json.data.Drivers.map((driver) => new Driver(driver));
        return drivers;
      })
      .catch(this.handleError);
  }

  getDriversCount() {
    let url = this._operatorApi.getDriversCount;

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  banDriver(username: string) {
    let url = this._operatorApi.banDriverUrl;
    let body = { username };

    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getBannedDrivers() {
    let url = this._operatorApi.getBannedDriversUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['banDrivers'];
        return data;
      })
      .catch(this.handleError);
  }
  unBanDriver(username) {
    let url = this._operatorApi.unBanDriverUrl;
    let body = { username };
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getOnlineDrivers(): Observable<any> {
    let url = this._operatorApi.getOnlineDriversUrl;

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.onlines.map((driver) => new Driver(driver));
        return data;
      })
      .catch(this.handleError);
  }

  getOnlineDriversCount() {
    let url = this._operatorApi.getOnlineDriversCountUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  getDriversCredit() {
    let url = this._operatorApi.getDriversCreditUrl;
    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['driversCredit'];
        return data;

      })
      .catch(this.handleError);
  }

  getDriverCredit(username: string) {
    let url = this._operatorApi.getDriverCreditUrl(username);

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.drivers;
        return data;
      })
      .catch(this.handleError);
  }

  getLowRateDrivers(): Observable<any> {
    let url = this._operatorApi.getLowRateDriversUrl;
    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data.users.Drivers;
        return data;
      })
      .catch(this.handleError);
  }
  uploadDriverDoc(fileType, username, file) {

    let url = this._operatorApi.uploadDriverDocUrl(fileType, username);
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log(formData);

    return this._http
      .postFile(url, formData)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        return json;
      })
      .catch(this.handleError);
  }
  // -- Drivers -- //


  // -- Passenger -- //
  searchPassengers(param: ISearchParam) {
    let url = this._operatorApi.searchPassengersUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.Passengers.map(passenger => new Passenger(passenger));
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }

  banPassenger(username: string) {
    let url = this._operatorApi.banPassengerUrl;
    let body = { username }

    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getBannedPassengers() {
    let url = this._operatorApi.getBannedPassengersUrl;

    return this._http
      .get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }

        let data = json.data['banPassengers'];
        return data;
      })
      .catch(this.handleError);
  }
  unBanPassenger(username) {
    let url = this._operatorApi.unBanDPassengerUrl;
    let body = { username }

    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  getNumberofAllPassenger() {

  }
  // -- Passenger -- //

  // -- Organization -- //
  insertOrganization(): Observable<any> {
    let url = this._operatorApi.insertOrganizationUrl;

    return this._http
      .get(url)
      .map((res: Response) => res.json);
  }

  getOrganization(username: string): Observable<any> {
    let url = this._operatorApi.getOrganizationUrl(username);
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }


  searchOrganizations(param: ISearchParam) {
    let url = this._operatorApi.getOrganizationsUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let organizations = json.data.organizations.map(organization => new Organization(organization));
        console.log(organizations);
        return organizations;
      })
      .catch(this.handleError);
  }

  removeOrganizations(username: string): Observable<any> {
    let url = this._operatorApi.removeOrganizationsUrl(username);

    return this._http.delete(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  confirmOrganizations(username: string): Observable<any> {
    let url = this._operatorApi.confirmOrganizationsUrl(username);
    let body = '';
    return this._http.post(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }
  // -- Organization -- //

  // -- Tickets -- //
  getTickets(): Observable<any> {
    let url = this._operatorApi.getTicketsUrl;

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data['All Unresolved Tickets'];
        return data;
      })
      .catch(this.handleError);
  }
  resolveTicket(id) {
    let url = this._operatorApi.resolveTicketUrl(id);
    let body = '';
    return this._http.patch(url, body)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        return json;
      })
      .catch(this.handleError);
  }

  getPassengersTicketForDriver(driverUsername): Observable<any> {
    let url = this._operatorApi.getPassengersTicketForDriverUrl(driverUsername);

    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }
  // -- Tickets -- //

  requestTrip(trip): Observable<any> {
    let url = this._operatorApi.requestTripUrl;

    return this._http
      .post(url, trip)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data;
        return data;
      })
      .catch(this.handleError);
  }

  // -- Not Implemented -- //
  getNewPassengersCount(): Observable<any> {
    let url = this._operatorApi.getNewPassengersUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let count = json.data;
        console.log(count);
        return count;
      })
      .catch(this.handleError);
  }

  getPassengersCount(): Observable<any> {
    let url = this._operatorApi.getAllPassengersUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let count = json.data;
        console.log(count);
        return count;
      })
      .catch(this.handleError);
  }

  getOrganizationsCount(): Observable<any> {
    let url = this._operatorApi.getAllOrganizationsUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let count = json.data;
        console.log(count);
        return count;
      })
  }

  getNewOrganizationsCount(): Observable<any> {
    throw new Error('Not Implemented');
  }

  getTodayTripsCount(): Observable<any> {
    let url = this._operatorApi.getTodayTripsUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let count = json.data;
        console.log(count);
        return count;
      })
      .catch(this.handleError);
  }

  getOnlineTripsCount(): Observable<any> {
    let url = this._operatorApi.getOnlineTripsUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let count = json.data;
        return count;
      })
      .catch(this.handleError);
  }
  getVouchers() {
    let url = this._operatorApi.getVouchersUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.vouchers.map(vouchers => new Vouchers(vouchers));
        console.log(data);
        return data;
      })
  }
  getStates() {
    let url = this._operatorApi.getStatesUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.allStates;
        return data;
      })
  }
  getCities(id) {
    let url = this._operatorApi.getCitiesUrl(id);
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.cities;
        return data;
      })
  }


  searchTrips(param: ISearchParam) {
    let url = this._operatorApi.searchTripsUrl;

    let params = new URLSearchParams();
    params.append('q', param.query);
    params.append('count', param.count);
    params.append('offset', param.offset);

    return this._http.search(url, params)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let trips = json.data.trips.map(trips => new Trip(trips));
        console.log(trips);
        return trips;
      })
      .catch(this.handleError);
  }
  getOnlineTrips() {
    let url = this._operatorApi.onlineTripsUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.onlineTrips;
        console.log(data);
        return data;
      })
      .catch(this.handleError);
  }
  getProviders() {
    let url = this._operatorApi.getProvidersUrl;
    return this._http.get(url)
      .map((res: Response) => {
        let json = res.json();
        if (json.statusCode !== 1) {
          throw new ApiError(url, json);
        }
        let data = json.data.serviceProvider;
        return data;
      })
      .catch(this.handleError);
  }

  handleError(err: ApiError) {
    console.error(err);
    return Observable.throw(err || 'backend server error');
  }

}
