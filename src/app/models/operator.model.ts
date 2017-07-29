import { IUser, User } from './user.model';

export interface IOperator extends IUser {
  workNumber: string;
  accountState?: string;
}

export class Operator extends User {
  public workNumber: string;
  public accountState?: string;
  private accountStateNames = {
    '-1': 'بن شده',
    '0': 'غیر فعال',
    '3': 'فعال',
  }
  get accountStateName() {
    return this.accountStateNames[this.accountState];
  }
  constructor(operator: IOperator) {
    super(operator);
    this.workNumber = operator.workNumber;
    this.accountState = operator.accountState;
  }
}
