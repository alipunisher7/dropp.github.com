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

export class Driver extends User {
  StatusCodeNames = {
    "-1": "بن شده",
    "0": "غیر فعال",
    "1": "درحال ثبت نام",
    "2": "منتظر تایید",
    "3": "تایید شده"
  }

  email?: string;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  city?: string;
  gender?: string;
  serviceType?: string;
  address?: Address;
  vehicle?: Vehicle;
  nationalNumber?: string;
  registrationDate?: string;
  stateCode?: number;
  credit?: string;
  device?: Device;

  get status() {
    return this.StatusCodeNames[this.stateCode];
  }

  constructor(driver: IDriver) {
    super(driver);
    this.email = driver.email;
    this.username = driver.username;
    this.password = driver.password;
    this.firstName = driver.firstName;
    this.lastName = driver.lastName;
    this.phoneNumber = driver.phoneNumber;
    this.city = driver.city;
    this.gender = driver.gender;
    this.serviceType = driver.serviceType;
    this.address = driver.address;
    this.birthDate = driver.birthDate;
    this.vehicle = driver.vehicle;
    this.nationalNumber = driver.nationalNumber;
    this.registrationDate = driver.registrationDate;
    this.stateCode = driver.stateCode;
    this.credit = driver.credit;
    this.device = driver.device || new Device({});
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
