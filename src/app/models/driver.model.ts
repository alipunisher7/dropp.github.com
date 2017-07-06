import { Address } from './address.model';
import { Vehicle } from './vehicle.model';
import { Device } from './device.model';

export interface IDriver {
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
  device?: Device;
  email: string;
  username: string;
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
