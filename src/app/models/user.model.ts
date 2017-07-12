export enum gender { f, m }

interface IUser {
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  city?: string;
  gender?: gender | string;
}

export class User {
  public username: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public phoneNumber?: string;
  public email?: string;
  public city?: string;
  public gender?: gender | string;

  constructor(user: IUser) {
    this.username = user.username;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.city = user.city;
    this.gender = user.gender;
  }
}

export class Operator extends User {
  public workNumber: string;
  public year: number;
  public month: number;
  public day: number;
}
