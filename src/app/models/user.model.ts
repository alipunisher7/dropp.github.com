import { BirthDate } from './birthdate.model';

export interface IUser {
  id?: string;
  email?: string;
  role?: string;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  city?: string;
  gender?: Gender;
  birthDate?: BirthDate;
}

type Gender = 'F' | 'M';

const GenderNames = {
  'F': 'زن',
  'M': 'مرد'
}
const cityNames = {
  'TE': 'تهران',
  'MA': 'مشهد',
  'IS': 'اصفهان',
  'GO': 'گرگان'
}

export class User implements IUser {
  public role?: string;
  public username: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public phoneNumber?: string;
  public email?: string;
  public city?: string;
  public gender?: Gender;
  public birthDate?: BirthDate;
  public id?: string;

  getGenderName() {
    // console.log('this.gender: ', this.gender);
    let gender = !!this.gender ? GenderNames[this.gender] : '-';
    return gender;
  }
  getCityName() {
    let city = !!this.city ? cityNames[this.city] : '-';
    return city;
  }

  constructor(user: IUser) {
    this.username = user.username;
    this.role = user.role;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.city = user.city;
    this.gender = user.gender;
    this.birthDate = user.birthDate;
    this.id = user.id;
  }
}
