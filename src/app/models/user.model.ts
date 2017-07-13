export interface IUser {
  email?: string;
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  city?: string;
  gender?: string;
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
