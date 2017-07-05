interface IUser {
  username: String;
  password?: String;
}

export class User {
  username: String;
  password?: String;

  constructor(user: IUser) {
    this.username = user.username;
    this.password = user.password || '';
  }
}
