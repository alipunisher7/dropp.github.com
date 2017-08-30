import { IUser, User } from './user.model';

export interface IOperator extends IUser {
  workNumber: string;
  accountState?: string;
  role?: string;
}

export class Operator extends User {
  public workNumber: string;
  public accountState?: string;
  public role?: string;
  private accountStateNames = {
    '-2': 'حذف شده',
    '-1': 'بن شده',
    '0': 'غیر فعال',
    '3': 'فعال',
  }
  private roleNames = {
    'O': 'اپراتور',
    'M': 'اپراتور ارشد',
    'A': 'ادمین',
  }
  get accountStateName() {
    return this.accountStateNames[this.accountState];
  }
  get roleName() {
    return this.roleNames[this.role];
  }
  name() {
    return `${this.firstName} ${this.lastName}`;
  }
  constructor(operator: IOperator) {
    super(operator);
    this.workNumber = operator.workNumber;
    this.accountState = operator.accountState;
    this.role = operator.role;
  }
}
