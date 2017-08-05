import { Injectable } from '@angular/core';
import { API_URL } from 'configs';

const adminApi = `${API_URL}/admin`;

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
  public updateTariffUrl = `${adminApi}/tariffs`;
  public getTarrifUrl = (cityName: string) => `${adminApi}/tariffs/${cityName}`;
  // public getTarrifUrl = `${adminApi}/ticketSubjects`;
  public banMasterUrl = `${adminApi}/banMaster`;
  public unBanMasterUrl = `${adminApi}/unBanMaster`;

  public enableServiceUrl = (serviceID) => `${adminApi}/services/${serviceID}/enable`;
  public disableServiceUrl = (serviceID) => `${adminApi}/services/${serviceID}/disable`;

  public getBugsUrl = `${adminApi}/bugs`;
  public resolveBugUrl = (id: number) => `${adminApi}/bugs/${id}/resolve`;

  public getSystemSettingUrl = `${adminApi}/settings`;
  public updateSystemSettingUrl = `${adminApi}/settings`;

  public insertStateUrl = `${adminApi}/states`;
  public insertCityUrl = (id) => `${adminApi}/cities/${id}`;
  public getDriversAgeReportUrl = `${adminApi}/report/drivers/age`;
  public getPassengersAgeReportUrl = `${adminApi}/report/passengers/age`;
  public getOperatorsAgeReportUrl = `${adminApi}/report/operators/age`;
  public getTripReportUrl = `${adminApi}/report/trips/2017-08-01/2017-08-03`;
}
