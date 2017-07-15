import { API_URL } from 'configs';
const copApi = `${API_URL}/operator`;

export class COPApi {

  public insertManufactureUrl = `${copApi}/manufactures`;
  public insertCarUrl = `${copApi}/cars`;
  public getManufacturesUrl = `${copApi}/manufactures`;
  public getDistanceByVehicleIdUrl = (vehicleId) => `${copApi}/cars/${vehicleId}/distance`;
}
