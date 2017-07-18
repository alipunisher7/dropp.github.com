import { BirthDate } from './birthdate.model';

export interface IUser {
  email?: string;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  city?: string;
  gender?: string;
  birthDate?: BirthDate;
}

const GenderNames = {
  'F': 'زن',
  'M': 'مرد'
}

export class User implements IUser {

  public username: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public phoneNumber?: string;
  public email?: string;
  public city?: string;
  public gender?: string;
  public birthDate?: BirthDate;

  getGenderName() {
    let gender = !!this.gender ? GenderNames[this.gender] : 'N/A';
    return gender;
  }

  constructor(user: IUser) {
    this.username = user.username;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.city = user.city;
    this.gender = user.gender;
    this.birthDate = user.birthDate;
  }
}

export interface IOperator extends IUser {
  workNumber: string;
  accountState?: string;
}

export class Operator extends User {
  public workNumber: string;
  public accountState?: string;

  constructor(operator: IOperator) {
    super(operator);
    this.workNumber = operator.workNumber;
    this.accountState = operator.accountState;
  }
}
