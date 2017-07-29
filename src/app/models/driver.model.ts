import { Address } from './address.model';
import { Vehicle } from './vehicle.model';
import { Device } from './device.model';
import { IUser, User } from './user.model';
import { BirthDate } from './birthdate.model';

export enum DriverStatus {
  Banned = -1,
  Inactive = 0,
  SigninUp = 1,
  Unverified = 2,
  Verified = 3
}


export interface IDriver extends IUser {
  serviceType?: string;
  address?: Address;
  vehicle?: Vehicle;
  nationalNumber?: string;
  registrationDate?: string;
  stateCode?: number;
  credit?: string;
  device?: Device;
}

const StatusCodeNames = {
  "-1": "بن شده",
  "0": "غیر فعال",
  "1": "درحال ثبت نام",
  "2": "منتظر تایید",
  "3": "تایید شده"
}
const serviceTypeNames = {
  "ECO": "اکو",
  "LUX": "لوکس",
  "NORMAL": "نرمال",
  "MOTOR_TRANSPORT": "موتور",
  "MOTOR_DELIVERY": "پیک",
  "TAXI": "تاکسی",
  "SUV": "SUV",
}

export class Driver extends User {

  serviceType?: string;
  address?: Address;
  vehicle?: Vehicle;
  nationalNumber?: string;
  registrationDate?: string;
  stateCode?: number;
  credit?: string;
  device?: Device;

  get status() {
    return StatusCodeNames[this.stateCode];
  }
  get serviceTypeName() {
    return serviceTypeNames[this.serviceType];
  }

  constructor(driver: IDriver) {
    super(driver);
    this.serviceType = driver.serviceType;
    this.address = driver.address;
    this.birthDate = driver.birthDate;
    this.vehicle = driver.vehicle;
    this.nationalNumber = driver.nationalNumber;
    this.registrationDate = driver.registrationDate;
    this.stateCode = driver.stateCode;
    this.credit = driver.credit;
    this.device = driver.device || new Device();
  }

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
