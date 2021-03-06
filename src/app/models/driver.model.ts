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
  rate?: string;
}

const StatusCodeNames = {
  "-1": "بن شده",
  "0": "غیر فعال",
  "1": "درحال ثبت نام",
  "2": "منتظر تایید",
  "3": "تایید شده"
}
const serviceTypeNames = {
  "ECO": "Eco",
  "LUX": "Lux",
  "NORMAL": "Normal",
  "MOTOR_TRANSPORT": "Motor-Trasnport",
  "MOTOR_DELIVERY": "Motor-Delivery",
  "TAXI": "Taxi",
  "SUV": "SUV",
  "E": "Eco",
  "L": "Lux",
  "N": "Normal",
  "R": "Motor-Trasnport",
  "D": "Motor-Delivery",
  "T": "Taxi",
  "S": "SUV",
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
  rate?: string;

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
    this.rate = driver.rate;
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
