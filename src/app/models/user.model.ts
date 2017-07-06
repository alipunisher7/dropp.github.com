interface IUser {
  username: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export class User {
  public username: string;
  public password?: string;
  public firstName?: string;
  public lastName?: string;
  public phoneNumber?: string;

  constructor(user: IUser) {
    this.username = user.username;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
