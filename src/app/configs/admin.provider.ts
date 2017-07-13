import { Injectable } from '@angular/core';
import { API_URL } from './api.provider';
const adminApi = `${API_URL}/operator`;

@Injectable()
export class AdminApi {

  public deleteOperatorUrl = (id) => `${adminApi}/operators/${id}`;
  public insertMasterUrl = `${adminApi}/masters`;

  public insertServiceUrl = `${adminApi}/services`;
  public getServicesOfCityUrl = (cityName: string) => `${adminApi}/services/${cityName}`;

  public insertRadius = `${adminApi}/searchRadiuses`;
  public updateRadiusOfServiceUrl = (serviceType: string) => `${adminApi}/searchRadiuses/${serviceType}`;
  public getRadiusOfServiceUrl = (serviceType: string) => `${adminApi}/searchRadiuses/${serviceType}`;

  public insertVoucher = `${adminApi}/vouchers`;

  public insertTarrifUrl = `${adminApi}/tariffs`;

}
