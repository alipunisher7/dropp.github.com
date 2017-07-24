import { API_URL } from 'configs';
const operatorApi = `${API_URL}/operator`;

export class OperatorApi {

  public insertSubscribeUrl = `${operatorApi}/subscribes`;
  public searchSubscribeUrl = `${operatorApi}/subscribes`;
  public confirmDriverUrl = (driverUsername) => `${operatorApi}/confirmDriver/${driverUsername}`;

  public getDriverUrl = (driverUsername) => `${operatorApi}/drivers/${driverUsername}`;
  public searchDriversUrl = `${operatorApi}/drivers`;
  public getDriversCount = `${operatorApi}/drivers/count`;
  public getOnlineDriversUrl = `${operatorApi}/drivers/online`;
  public getOnlineDriversCountUrl = `${operatorApi}/drivers/online/count`;

  public getDriversCreditUrl = `${operatorApi}/drivers/credit`;
  public getDriverCreditUrl = (driverUsername) => `${operatorApi}/drivers/${driverUsername}/credit`;

  public getLowRateDriversUrl = `${operatorApi}/drivers/lowRate`;

  public searchPassengersUrl = `${operatorApi}/passengers`;
  public banPassengerUrl = `${operatorApi}/banPassenger`;
  public getBannedPassengersUrl = `${operatorApi}/passengers/banned`;
  public unBanDPassengerUrl = `${operatorApi}/unBanPassenger`;

  public banDriverUrl = `${operatorApi}/banDriver`;
  public getBannedDriversUrl = `${operatorApi}/drivers/banned`;
  public unBanDriverUrl = `${operatorApi}/unBanDriver`;

  public insertOrganizationUrl = `${operatorApi}/organizations`;

  public getOrganizationsUrl = `${operatorApi}/organizations`;
  public getOrganizationUrl = (username) => `${operatorApi}/organizations/${username}`;
  public removeOrganizationsUrl = (username) => `${operatorApi}/organizations/${username}`;

  public getPassengersTicketForDriverUrl = (driverUsername) => `${operatorApi}/${driverUsername}/tickets/passengers`;

  public getTicketsUrl = `${operatorApi}/tickets`;
  public resolveTicketUrl = (id) => `${operatorApi}/tickets/${id}/resolve`;

  public getOnlineTripsUrl = `${operatorApi}/trips/online/count`;
  public getTodayTripsUrl = `${operatorApi}/trips/count`;
  public getAllDriversUrl = `${operatorApi}/viewNumberOfAllDrivers`;
  public getAllPassengersUrl = `${operatorApi}/passengers/count`;
  public getNewPassengersUrl = `${operatorApi}/passengers/new/count`;
  public getAllOrganizationsUrl = `${operatorApi}/organizations/count`;
  public getDriverInfoUrl = ``;

  public requestTripUrl = `${API_URL}/passenger/trip/request`;

  public getVouchersUrl = `${operatorApi}/vouchers`;
}
