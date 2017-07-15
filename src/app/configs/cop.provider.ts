import { API_URL } from './api.provider';

export class COPApi {
  private copApi = `${API_URL}/operator`;

  public insertManufactureUrl = `${this.copApi}/manufactures`;
  public insertCarUrl = `${this.copApi}/cars`;
  public getManufacturesUrl = `${this.copApi}/manufactures`;
  public getDistanceByVehicleIdUrl = (vehicleId) => `${this.copApi}/cars/${vehicleId}/distance`;
}
