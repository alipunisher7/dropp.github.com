import { Device } from './device.model';
import { User, IUser } from './user.model';

export interface IPassenger extends IUser {
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: Device;
  registrationDate?: string;
  status?: string;
}
const stateCodeNames = {
  "-2": "حذف شده",
  "-1": "بن شده",
  "0": "غیر فعال",
  "1": "فعال"
}
export class Passenger extends User {
  credit: string;
  tripCount?: string;
  stateCode?: string;
  device?: Device;
  registrationDate?: string;
  status?: string;
  get stateCodeName() {
    return stateCodeNames[this.stateCode];
  }
  constructor(passenger: IPassenger) {
    super(passenger);
    this.credit = passenger.credit;
    this.tripCount = passenger.tripCount;
    this.stateCode = passenger.stateCode;
    this.device = passenger.device || new Device();
    this.registrationDate = passenger.registrationDate;
    this.status = passenger.status;
  }
}

export interface ISearchPassenger {
  username: string;
  credit: string;
  tripCount: string;
  status: string;
}
