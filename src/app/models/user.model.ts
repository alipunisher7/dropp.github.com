interface IUser {
  username: string;
  password?: string;
}

export class User {
  username: string;
  password?: string;

  constructor(user: IUser) {
    this.username = user.username;
    this.password = user.password || '';
  }
}
