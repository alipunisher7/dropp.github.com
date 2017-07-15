import { Injectable } from '@angular/core';
import { API_URL } from './api.provider';

const adminApi = `${API_URL}/operator`;

@Injectable()
export class AdminApi {

  public deleteOperatorUrl = (id) => `${adminApi}/operators/${id}`;

  public insertMasterUrl = `${adminApi}/masters`;

  public insertServiceUrl = `${adminApi}/services`;

  public getServicesOfCityUrl = (cityName: string) => `${adminApi}/services/${cityName}`;

  public insertRadiusUrl = `${adminApi}/searchRadiuses`;
  public getRadiusesUrl = `${adminApi}/searchRadiuses`;
  public updateRadiusOfServiceUrl = (serviceType: string) => `${adminApi}/searchRadiuses/${serviceType}`;
  public getRadiusOfServiceUrl = (serviceType: string) => `${adminApi}/searchRadiuses/${serviceType}`;

  public insertTarrifUrl = `${adminApi}/tariffs`;
  public getTarrifUrl = `${adminApi}/ticketSubjects`;

}
