import { Address } from './address.model';
import {Vehicle} from './Vehicle.model';
import {device} from './device.model';
export interface IDriverInfo {
  serviceType?: string;
  lastName?: string;
  address?: Address;
  gender?: string;
  birthDate?: string;
  vehicle?: Vehicle;
  firstName?: string;
  nationalNumber?: string;
  registrationDate?: string;
  stateCode?: string;
  credit?: string;
  device?: device;
  email: string;
  username: string;

}
