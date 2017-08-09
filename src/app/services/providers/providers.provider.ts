import { API_URL } from 'configs';
const providerApi = `${API_URL}/provider`;

export class ProviderApi {
  public driversDebtUrl = `${providerApi}/drivers/debt`;
  public driverPayUrl = (username) => `${providerApi}/payment/${username}`;
  public driverMostDebtUrl = `${providerApi}/drivers/mostDebt`;
  public driverDebtgtUrl = (value) => `${providerApi}/drivers/debt/gt/${value}`;
  public providerclaimUrl = `${providerApi}/claim`;
  public searchDriversUrl = `${providerApi}/drivers`;
  public banDriversUrl = `${providerApi}/banDriver`;
  public deactiveDriversUrl = `${providerApi}/deactiveDriver`;
  public getDriversReportUrl = `${providerApi}/report/drivers`;
  public getProviderClaimReportUrl = `${providerApi}/report/claim`;
}