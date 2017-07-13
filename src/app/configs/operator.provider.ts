import { API_URL } from './api.provider';

export class OperatorApi {
  private operatorApi = `${API_URL}/operator`;

  public getOnlineTripsUrl = ``;
  public getTodayTripsUrl = ``;
  public getOnlineDriversUrl = ``;
  public getAllDriversUrl = `${this.operatorApi}/viewNumberOfAllDrivers`;
  public getNewPassengersUrl = ``;
  public getAllPassengersUrl = ``;
  public getNewOrganizationsUrl = ``;
  public getAllOrganizationsUrl = ``;
  public getDriverInfoUrl = ``;
  public getLowRateDriverUrl = `${this.operatorApi}/LowRateDrivers`;
  public getDriversCreditUrl = `${this.operatorApi}/viewAllDriverCredit`;
  public getBannedDriversUrl = `${this.operatorApi}/viewBanDrivers`;
  public getBannedPassengersUrl = `${this.operatorApi}/viewBanPassengers`;
  public getOrganizationsUrl = ``;
  public searchDriversCreditUrl = `${this.operatorApi}/viewDriverCredit`;
  public searchDriversUrl = `${this.operatorApi}/searchDriver`;
  public searchPassengersUrl = `${this.operatorApi}/searchPassenger`;
  public banDriverUrl = `${this.operatorApi}/banDriver`;
  public banPassengerUrl = `${this.operatorApi}/banPassenger`;
  public subscribeRegisterUrl = `${this.operatorApi}/subscribeRegister`;
}
