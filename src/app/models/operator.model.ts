import { IUser, User } from './user.model';

export interface IOperator extends IUser {
  workNumber: string;
}

export class Operator extends User {
  public workNumber: string;
  public accountState?: string;

  constructor(operator: IOperator) {
    super(operator);
    this.workNumber = operator.workNumber;
  }
}
