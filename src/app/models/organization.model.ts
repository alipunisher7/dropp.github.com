import { Address } from './address.model'

export interface IOrganization {
  name?: string;
  username: string;
  workNumber?: string;
  phoneNumber?: string;
  email?: string;
  empCount?: string;
  description?: string;
  registrarFirstName?: string;
  registrarLastName?: string;
  registrarRole?: string;
  accountState?: string;
  address?: Address;
}

export class Organization implements IOrganization {
  name?: string;
  username: string;
  workNumber?: string;
  phoneNumber?: string;
  email?: string;
  empCount?: string;
  description?: string;
  registrarFirstName?: string;
  registrarLastName?: string;
  registrarRole?: string;
  accountState?: string;
  address?: Address;
  empCountNames = {
    "LESS_THAN_10": "کمتر از 10 نفر",
    " LESS_THAN_20": "کمتر از 20 نفر",
    "LESS_THAN_50": "کمتر از 50 نفر",
    "LESS_THAN_100": "کمتر از 100 نفر",
    "LESS_THAN_500": "کمتر از 500 نفر",
    "LESS_THAN_1000": "کمتر از 1000 نفر",
    "MORE_THAN_10000": "بیشتر از 1000 نفر"
  }
  accountStateNames = {
    "VERIFIED": "تایید شده",
    "READY_TO_VERIFY": "آماده تایید",
    "ACTIVATED": "فعال شده",
    "REGISTERED": "ثبت نام شده",
    "BANNED": "بن شده"
  }
  get count() {
    return this.empCountNames[this.empCount];
  }
  get accountStateName() {
    return this.accountStateNames[this.accountState];
  }

  constructor(organization: IOrganization) {
    this.name = organization.name;
    this.username = organization.username;
    this.workNumber = organization.workNumber;
    this.phoneNumber = organization.phoneNumber;
    this.email = organization.email;
    this.empCount = organization.empCount;
    this.description = organization.description;
    this.registrarFirstName = organization.registrarFirstName;
    this.registrarLastName = organization.registrarLastName;
    this.registrarRole = organization.registrarRole;
    this.accountState = organization.accountState;
    this.address = new Address(organization.address);
  }

}
