import { Device } from './device.model';

export interface IPassenger {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  email: string;
  username: string;
  phone?: string;
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: Device;
  registrationDate?: string;
}

export interface ISearchPassenger {
  name: string;
  username: string;
  phone: string;
  credit: string;
  tripCount: string;
  status: string;
}
