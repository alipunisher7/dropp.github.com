export interface IDriverDebt {
  username: string;
  credit: string;
  accountState: string;
}
const accountStateNames = {
  "-2": "پاک شده",
  "-1": "بن شده",
  "0": "غیر فعال",
  "1": "درحال ثبت نام",
  "2": "منتظر تایید",
  "3": "تایید شده"
}
export class DriverDebt implements IDriverDebt {
  username: string;
  credit: string;
  accountState: string;

  get accountStateName() {
    return accountStateNames[this.accountState];
  }
  constructor(driverDebt: IDriverDebt) {
    this.username = driverDebt.username;
    this.credit = driverDebt.credit;
    this.accountState = driverDebt.accountState;
  }
}
