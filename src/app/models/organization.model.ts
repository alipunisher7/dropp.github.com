import {Address} from './address.model'
export interface IorganizationInfo {
  orgName?: string;
  username: string;
  worknumber?: string;
  phonenumber?: string;
  email?: string;
  employeeCount?: string;
  describtion?: string;
  registrarFirstname?: string;
  registrarLastname?: string;
  registrarRole?: string;
  address?: Address;
}
