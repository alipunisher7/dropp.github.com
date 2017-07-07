import { Address } from './address.model';
import { Vehicle } from './vehicle.model';
import { Device } from './device.model';

export interface IDriver {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  serviceType?: string;
  address?: Address;
  gender?: string;
  birthDate?: string;
  vehicle?: Vehicle;
  nationalNumber?: string;
  registrationDate?: string;
  stateCode?: string;
  credit?: string;
  device?: Device;
}

export interface IDriverCredit {
  username: string;
  credit: string;
  cardNumber: string;
  accountNumber: string;
}

export interface ILowRateDriver {
  username: String;
  avg: String;
}
